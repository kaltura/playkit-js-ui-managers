# Component Injection Manager Design

**Date**: 2026-05-18  
**Status**: Approved

## Overview

A new service in `playkit-js-ui-managers` that allows plugins to inject components into the video player at specific positions with automatic layout management.

## Requirements

- Support two injection positions:
  1. **Bottom-right overlay**: Component overlays the video in bottom-right corner
  2. **Side-by-side**: Video and component split the player area 50/50
- Only one component can be injected at a time
- Components remain visible until explicitly removed
- Support switching component position without recreating it
- Video element must be restored to original position on cleanup

## Architecture

### Location
`playkit-js-ui-managers/src/services/component-injection-manager/`

### Integration
- Manager instantiated in `UIManagers` constructor alongside other managers
- Accessible via `player.getService('uiManagers').getComponentInjectionManager()`
- Cleaned up in `UIManagers.destroy()`

## API Design

```typescript
class ComponentInjectionManager {
  inject(options: InjectOptions): void
  switchPosition(position: InjectionPosition): void
  remove(): void
  getCurrentPosition(): InjectionPosition | null
}

interface InjectOptions {
  position: InjectionPosition;
  component: ComponentFactory;
  props?: any;
}

enum InjectionPosition {
  BottomRight = 'bottom-right',
  SideBySide = 'side-by-side'
}

type ComponentFactory = (props?: any) => VNode;
```

### Usage Example

```typescript
const uiManagers = this.player.getService('uiManagers');
const injectionManager = uiManagers.getComponentInjectionManager();

// Inject side-by-side
injectionManager.inject({
  position: InjectionPosition.SideBySide,
  component: (props) => <MyImageComponent {...props} />,
  props: {src: 'image.jpg'}
});

// Switch to bottom-right
injectionManager.switchPosition(InjectionPosition.BottomRight);

// Remove
injectionManager.remove();
```

## Implementation Details

### Internal State

```typescript
private _currentComponent: {
  component: ComponentFactory;
  props?: any;
  position: InjectionPosition;
  removeFunction: () => void;
} | null = null;

private _originalVideoParent: HTMLElement | null = null;
private _videoElement: HTMLVideoElement | null = null;
```

### Rendering Strategy

Both positions use `player.ui.addComponent()` which returns a removal function:

**Bottom-Right Overlay**:
- Target: `VideoArea` container
- Approach: Absolute positioning overlay
- CSS: `position: absolute; bottom: 80px; right: 20px; z-index: 10;`
- Video element: Unchanged

**Side-by-Side**:
- Target: `PlayerArea` container
- Approach: Flexbox wrapper with video element manipulation
- Pattern: Inspired by `playkit-js-dual-screen`
- Video element: Moved into left flex container via `useRef` + `useEffect`
- Split: 50% video / 50% component

### Component Structure

```typescript
// Bottom-right overlay (functional component)
const BottomRightOverlay: FunctionalComponent = ({children}) => (
  <div className={styles.bottomRightOverlay}>
    {children}
  </div>
);

// Side-by-side wrapper (functional component)
const SideBySideWrapper: FunctionalComponent<Props> = ({
  player,
  component: InjectedComponent,
  componentProps
}) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = player.getVideoElement();
    if (videoContainerRef.current && videoElement) {
      videoElement.tabIndex = -1;
      videoContainerRef.current.prepend(videoElement);
    }
  }, [player]);

  return (
    <div className={styles.sideBySideWrapper}>
      <div className={styles.videoContainer} ref={videoContainerRef} />
      <div className={styles.componentContainer}>
        <InjectedComponent {...componentProps} />
      </div>
    </div>
  );
};
```

### Layout CSS

```scss
// side-by-side-wrapper.scss
.sideBySideWrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
}

.videoContainer,
.componentContainer {
  flex: 1;
  position: relative;
  height: 100%;
}

// bottom-right-overlay.scss
.bottomRightOverlay {
  position: absolute;
  bottom: 80px; // Above bottom bar
  right: 20px;
  z-index: 10;
  max-width: 400px;
  max-height: 300px;
}
```

### Method Implementation Flow

**inject()**:
1. Remove existing component if any (calls `_removeCurrentComponent()`)
2. Store original video parent location (first time only)
3. Render component via `_renderComponent()` which returns removal function
4. Store component state + removal function

**switchPosition()**:
1. Store current component + props
2. Call `inject()` with same component but new position
3. Cleanup handled automatically by inject()

**remove()**:
1. Restore video element if in side-by-side mode
2. Call stored removal function (from `player.ui.addComponent()`)
3. Clear current component state

**_restoreVideoElement()**:
1. Append video element back to `_originalVideoParent`
2. Called before removing side-by-side layout

## File Structure

```
playkit-js-ui-managers/src/services/component-injection-manager/
├── component-injection-manager.tsx          # Main manager class
├── models/
│   ├── injection-position.ts               # InjectionPosition enum
│   └── inject-options.ts                   # InjectOptions interface
└── ui/
    ├── side-by-side-wrapper.tsx            # Side-by-side layout component
    ├── side-by-side-wrapper.scss           # Flexbox layout styles
    ├── bottom-right-overlay.tsx            # Overlay wrapper component
    └── bottom-right-overlay.scss           # Absolute positioning styles
```

## Integration Points

**UIManagers Plugin** (`ui-managers.ts`):
```typescript
export class UIManagers extends KalturaPlayer.core.BasePlugin {
  private _componentInjectionManager!: ComponentInjectionManager;

  constructor(name: string, player: KalturaPlayer, config: any) {
    super(name, player, config);
    // ... other managers
    this._componentInjectionManager = new ComponentInjectionManager({
      kalturaPlayer: this.player,
      eventManager: this.eventManager
    });
  }

  getComponentInjectionManager(): ComponentInjectionManager {
    return this._componentInjectionManager;
  }

  destroy(): void {
    this._componentInjectionManager?.remove();
    super.destroy();
  }
}
```

## References

- Inspired by `playkit-js-dual-screen` side-by-side implementation
- Uses existing ui-managers service pattern
- Leverages `player.ui.addComponent()` API from playkit-js-ui
