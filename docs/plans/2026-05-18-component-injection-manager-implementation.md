# Component Injection Manager Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a service in ui-managers that allows plugins to inject components at specific positions (bottom-right overlay and side-by-side layout) with automatic video area layout management.

**Architecture:** Create ComponentInjectionManager service following existing ui-managers patterns. Use player.ui.addComponent() for rendering, functional components with hooks for video element manipulation, and flexbox for side-by-side layout (inspired by dual-screen plugin).

**Tech Stack:** TypeScript, Preact, SCSS, Karma/Mocha (testing)

---

## Task 1: Create Directory Structure and Type Definitions

**Files:**
- Create: `src/services/component-injection-manager/models/injection-position.ts`
- Create: `src/services/component-injection-manager/models/inject-options.ts`
- Create: `src/services/component-injection-manager/models/index.ts`

**Step 1: Create InjectionPosition enum**

Create the file with the position enum:

```typescript
// src/services/component-injection-manager/models/injection-position.ts
export enum InjectionPosition {
  BottomRight = 'bottom-right',
  SideBySide = 'side-by-side'
}
```

**Step 2: Create InjectOptions interface**

```typescript
// src/services/component-injection-manager/models/inject-options.ts
import { VNode } from 'preact';
import { InjectionPosition } from './injection-position';

export type ComponentFactory = (props?: any) => VNode;

export interface InjectOptions {
  position: InjectionPosition;
  component: ComponentFactory;
  props?: any;
}
```

**Step 3: Create models index barrel export**

```typescript
// src/services/component-injection-manager/models/index.ts
export { InjectionPosition } from './injection-position';
export { InjectOptions, ComponentFactory } from './inject-options';
```

**Step 4: Verify types compile**

Run: `npm run types:check`  
Expected: No errors

**Step 5: Commit**

```bash
git add src/services/component-injection-manager/models/
git commit -m "feat: add component injection manager type definitions"
```

---

## Task 2: Create Bottom-Right Overlay Component

**Files:**
- Create: `src/services/component-injection-manager/ui/bottom-right-overlay.tsx`
- Create: `src/services/component-injection-manager/ui/bottom-right-overlay.scss`

**Step 1: Create overlay SCSS styles**

```scss
// src/services/component-injection-manager/ui/bottom-right-overlay.scss
.bottomRightOverlay {
  position: absolute;
  bottom: 80px; // Above bottom bar
  right: 20px;
  z-index: 10;
  max-width: 400px;
  max-height: 300px;
  pointer-events: auto;
}
```

**Step 2: Create overlay functional component**

```typescript
// src/services/component-injection-manager/ui/bottom-right-overlay.tsx
import { h, FunctionalComponent } from 'preact';
import * as styles from './bottom-right-overlay.scss';

export interface BottomRightOverlayProps {
  children?: any;
}

export const BottomRightOverlay: FunctionalComponent<BottomRightOverlayProps> = ({ children }) => {
  return <div className={styles.bottomRightOverlay}>{children}</div>;
};
```

**Step 3: Verify types compile**

Run: `npm run types:check`  
Expected: No errors

**Step 4: Commit**

```bash
git add src/services/component-injection-manager/ui/bottom-right-overlay.*
git commit -m "feat: add bottom-right overlay component"
```

---

## Task 3: Create Side-by-Side Wrapper Component

**Files:**
- Create: `src/services/component-injection-manager/ui/side-by-side-wrapper.tsx`
- Create: `src/services/component-injection-manager/ui/side-by-side-wrapper.scss`
- Create: `src/services/component-injection-manager/ui/index.ts`

**Step 1: Create side-by-side SCSS styles**

```scss
// src/services/component-injection-manager/ui/side-by-side-wrapper.scss
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

.componentContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}
```

**Step 2: Create side-by-side functional component**

```typescript
// src/services/component-injection-manager/ui/side-by-side-wrapper.tsx
import { h, FunctionalComponent } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
import { ComponentFactory } from '../models';
import * as styles from './side-by-side-wrapper.scss';

export interface SideBySideWrapperProps {
  player: KalturaPlayer;
  component: ComponentFactory;
  componentProps?: any;
}

export const SideBySideWrapper: FunctionalComponent<SideBySideWrapperProps> = ({
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

**Step 3: Create UI barrel export**

```typescript
// src/services/component-injection-manager/ui/index.ts
export { BottomRightOverlay } from './bottom-right-overlay';
export { SideBySideWrapper } from './side-by-side-wrapper';
```

**Step 4: Verify types compile**

Run: `npm run types:check`  
Expected: No errors

**Step 5: Commit**

```bash
git add src/services/component-injection-manager/ui/
git commit -m "feat: add side-by-side wrapper component"
```

---

## Task 4: Create ComponentInjectionManager Service

**Files:**
- Create: `src/services/component-injection-manager/component-injection-manager.tsx`
- Create: `src/services/component-injection-manager/index.ts`

**Step 1: Create manager class skeleton**

```typescript
// src/services/component-injection-manager/component-injection-manager.tsx
import { h } from 'preact';
import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';
import { InjectionPosition, InjectOptions, ComponentFactory } from './models';
import { BottomRightOverlay, SideBySideWrapper } from './ui';

export interface ComponentInjectionManagerOptions {
  kalturaPlayer: KalturaPlayer;
  eventManager: PlaykitUI.EventManager;
}

interface CurrentComponent {
  component: ComponentFactory;
  props?: any;
  position: InjectionPosition;
  removeFunction: () => void;
}

export class ComponentInjectionManager {
  private _kalturaPlayer: KalturaPlayer;
  private _eventManager: PlaykitUI.EventManager;
  private _currentComponent: CurrentComponent | null = null;
  private _originalVideoParent: HTMLElement | null = null;
  private _videoElement: HTMLVideoElement | null = null;

  constructor(options: ComponentInjectionManagerOptions) {
    this._kalturaPlayer = options.kalturaPlayer;
    this._eventManager = options.eventManager;
  }

  public inject(options: InjectOptions): void {
    // TODO: implement
  }

  public switchPosition(position: InjectionPosition): void {
    // TODO: implement
  }

  public remove(): void {
    // TODO: implement
  }

  public getCurrentPosition(): InjectionPosition | null {
    return this._currentComponent?.position || null;
  }

  private _storeOriginalVideoLocation(): void {
    // TODO: implement
  }

  private _restoreVideoElement(): void {
    // TODO: implement
  }

  private _removeCurrentComponent(): void {
    // TODO: implement
  }

  private _renderComponent(options: InjectOptions): () => void {
    // TODO: implement
    return () => {};
  }
}
```

**Step 2: Implement _storeOriginalVideoLocation**

```typescript
private _storeOriginalVideoLocation(): void {
  this._videoElement = this._kalturaPlayer.getVideoElement();
  this._originalVideoParent = this._videoElement?.parentElement || null;
}
```

**Step 3: Implement _restoreVideoElement**

```typescript
private _restoreVideoElement(): void {
  if (this._videoElement && this._originalVideoParent) {
    this._originalVideoParent.appendChild(this._videoElement);
  }
}
```

**Step 4: Implement _renderComponent**

```typescript
private _renderComponent(options: InjectOptions): () => void {
  const { position, component, props } = options;

  if (position === InjectionPosition.BottomRight) {
    return this._kalturaPlayer.ui.addComponent({
      label: 'component-injection-bottom-right',
      presets: ['Playback', 'Live'],
      container: 'VideoArea',
      get: () => <BottomRightOverlay>{component(props)}</BottomRightOverlay>
    });
  } else if (position === InjectionPosition.SideBySide) {
    return this._kalturaPlayer.ui.addComponent({
      label: 'component-injection-side-by-side',
      presets: ['Playback', 'Live'],
      container: 'PlayerArea',
      get: () => (
        <SideBySideWrapper
          player={this._kalturaPlayer}
          component={component}
          componentProps={props}
        />
      )
    });
  }

  // Fallback (should never happen)
  return () => {};
}
```

**Step 5: Implement _removeCurrentComponent**

```typescript
private _removeCurrentComponent(): void {
  if (!this._currentComponent) return;

  // Restore video element if in side-by-side mode
  if (this._currentComponent.position === InjectionPosition.SideBySide) {
    this._restoreVideoElement();
  }

  // Call removal function
  this._currentComponent.removeFunction();
}
```

**Step 6: Implement public inject method**

```typescript
public inject(options: InjectOptions): void {
  // Remove existing component if any
  if (this._currentComponent) {
    this._removeCurrentComponent();
  }

  // Store original video location (first time only)
  if (!this._originalVideoParent) {
    this._storeOriginalVideoLocation();
  }

  // Render and store removal function
  const removeFunction = this._renderComponent(options);

  this._currentComponent = {
    component: options.component,
    props: options.props,
    position: options.position,
    removeFunction
  };
}
```

**Step 7: Implement switchPosition method**

```typescript
public switchPosition(position: InjectionPosition): void {
  if (!this._currentComponent) return;

  // Store component and props
  const { component, props } = this._currentComponent;

  // Re-inject at new position (handles cleanup automatically)
  this.inject({ position, component, props });
}
```

**Step 8: Implement remove method**

```typescript
public remove(): void {
  this._removeCurrentComponent();
  this._currentComponent = null;
}
```

**Step 9: Create service barrel export**

```typescript
// src/services/component-injection-manager/index.ts
export { ComponentInjectionManager } from './component-injection-manager';
export type { ComponentInjectionManagerOptions } from './component-injection-manager';
export { InjectionPosition, InjectOptions, ComponentFactory } from './models';
```

**Step 10: Verify types compile**

Run: `npm run types:check`  
Expected: No errors

**Step 11: Commit**

```bash
git add src/services/component-injection-manager/
git commit -m "feat: implement ComponentInjectionManager service"
```

---

## Task 5: Integrate Manager with UIManagers Plugin

**Files:**
- Modify: `src/ui-managers.ts`
- Modify: `src/index.ts`

**Step 1: Import ComponentInjectionManager in ui-managers.ts**

Add to imports at top of file:

```typescript
import { ComponentInjectionManager } from './services/component-injection-manager/component-injection-manager';
```

**Step 2: Add private field to UIManagers class**

Add after line 15 (after `protected static defaultConfig = {};`):

```typescript
private _componentInjectionManager!: ComponentInjectionManager;
```

**Step 3: Instantiate manager in constructor**

Add after line 36 (after bannerManager registration):

```typescript
this._componentInjectionManager = new ComponentInjectionManager({
  kalturaPlayer: player,
  eventManager: this.eventManager
});
player.registerService('componentInjectionManager', this._componentInjectionManager);
```

**Step 4: Add public getter method**

Add after the `isValid()` method:

```typescript
public getComponentInjectionManager(): ComponentInjectionManager {
  return this._componentInjectionManager;
}
```

**Step 5: Add cleanup in destroy method**

Create or update destroy method after isValid():

```typescript
public destroy(): void {
  this._componentInjectionManager?.remove();
  super.destroy();
}
```

**Step 6: Export types from index.ts**

Add to `src/index.ts`:

```typescript
export { ComponentInjectionManager } from './services/component-injection-manager/component-injection-manager';
export type { ComponentInjectionManagerOptions } from './services/component-injection-manager/component-injection-manager';
export { InjectionPosition, InjectOptions, ComponentFactory } from './services/component-injection-manager/models';
```

**Step 7: Verify types compile**

Run: `npm run types:check`  
Expected: No errors

**Step 8: Build the project**

Run: `npm run build`  
Expected: Successful build with no errors

**Step 9: Commit**

```bash
git add src/ui-managers.ts src/index.ts
git commit -m "feat: integrate ComponentInjectionManager with UIManagers plugin"
```

---

## Task 6: Manual Testing Setup

**Files:**
- Create: `docs/testing/component-injection-manual-test.md`

**Step 1: Create manual testing guide**

```markdown
# Component Injection Manager Manual Testing Guide

## Setup

1. Start dev server: `npm run dev`
2. Open browser console
3. Access player instance: `const player = KalturaPlayer.getPlayer('player-id')`

## Test Case 1: Bottom-Right Injection

```javascript
const uiManagers = player.getService('uiManagers');
const injectionManager = uiManagers.getComponentInjectionManager();

// Create test component
const TestImage = ({src}) => {
  return h('img', {
    src: src || 'https://via.placeholder.com/300x200',
    style: 'width: 300px; height: 200px; border: 2px solid red;'
  });
};

// Inject bottom-right
injectionManager.inject({
  position: 'bottom-right',
  component: TestImage,
  props: {src: 'https://via.placeholder.com/300x200'}
});
```

**Expected:** Image appears in bottom-right corner over video

## Test Case 2: Side-by-Side Injection

```javascript
// Switch to side-by-side
injectionManager.switchPosition('side-by-side');
```

**Expected:** 
- Video moves to left half
- Image appears in right half
- Both are 50% width

## Test Case 3: Position Switching

```javascript
// Switch back to bottom-right
injectionManager.switchPosition('bottom-right');
```

**Expected:**
- Video returns to full width
- Image appears bottom-right

## Test Case 4: Removal

```javascript
injectionManager.remove();
```

**Expected:**
- Component disappears
- Video element restored to original position

## Test Case 5: Replace Component

```javascript
// Inject first component
injectionManager.inject({
  position: 'bottom-right',
  component: TestImage,
  props: {src: 'https://via.placeholder.com/300x200/ff0000'}
});

// Inject second component (should replace first)
injectionManager.inject({
  position: 'bottom-right',
  component: TestImage,
  props: {src: 'https://via.placeholder.com/300x200/00ff00'}
});
```

**Expected:** Only green image visible (replaced red)
```

**Step 2: Commit**

```bash
git add docs/testing/
git commit -m "docs: add manual testing guide for component injection manager"
```

---

## Task 7: Add TypeScript Types to Global Declarations

**Files:**
- Modify: `src/types/global.d.ts`

**Step 1: Check if global.d.ts exists and read it**

Run: `cat src/types/global.d.ts`

**Step 2: Add ComponentInjectionManager to service types**

Add type declaration for the service accessor:

```typescript
declare module '@playkit-js/kaltura-player-js' {
  interface KalturaPlayer {
    getService(serviceName: 'componentInjectionManager'): ComponentInjectionManager;
  }
}
```

**Step 3: Verify types compile**

Run: `npm run types:check`  
Expected: No errors

**Step 4: Generate types**

Run: `npm run types:generate`  
Expected: Updated type definitions in types/ directory

**Step 5: Commit**

```bash
git add src/types/global.d.ts types/
git commit -m "feat: add ComponentInjectionManager to global type declarations"
```

---

## Task 8: Final Build and Verification

**Step 1: Clean build**

Run: `rm -rf dist/ && npm run build`  
Expected: Clean successful build

**Step 2: Check generated files**

Run: `ls -la dist/`  
Expected: Compiled bundle files present

**Step 3: Run type check**

Run: `npm run types:check`  
Expected: No errors

**Step 4: Run linter**

Run: `npm run lint:check`  
Expected: No linting errors (or fix any found)

**Step 5: If linting errors, fix them**

Run: `npm run lint:fix`  
Then: `git add . && git commit -m "chore: fix linting issues"`

**Step 6: Final commit**

```bash
git status
# Review all changes
git add .
git commit -m "feat: complete ComponentInjectionManager implementation

- Add type definitions for injection positions and options
- Implement bottom-right overlay component
- Implement side-by-side wrapper component
- Create ComponentInjectionManager service with full API
- Integrate manager with UIManagers plugin
- Add TypeScript type declarations
- Add manual testing documentation"
```

---

## Post-Implementation Notes

**Usage from plugins:**

```typescript
// In any plugin
const uiManagers = this.player.getService('uiManagers');
const injectionManager = uiManagers?.getComponentInjectionManager();

if (injectionManager) {
  injectionManager.inject({
    position: InjectionPosition.SideBySide,
    component: (props) => <MyComponent {...props} />,
    props: {data: 'example'}
  });
}
```

**Architecture decisions:**
- No automated tests initially (e2e structure exists but requires player instance mocking)
- Manual testing via dev server is primary validation
- Types are fully typed for IDE support
- Follows existing ui-managers service patterns

**Future enhancements (not in this plan):**
- Additional positions (top-left, top-right, bottom-left)
- Configurable split ratios for side-by-side
- Animation transitions between positions
- Multiple components with stacking/queuing
