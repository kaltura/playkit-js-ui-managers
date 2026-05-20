# Component Injection Manager

## Purpose

The Component Injection Manager provides a flexible way to inject custom UI components into the Kaltura Player at various positions. It supports both corner overlays (top-left, top-right, bottom-left, bottom-right) and side-by-side layouts where a component is displayed alongside the video player.

## API

### Constructor

```typescript
constructor(options: ComponentInjectionManagerOptions)
```

**Parameters:**
- `options.kalturaPlayer` - The Kaltura Player instance
- `options.eventManager` - The PlaykitUI EventManager instance

### Methods

#### `inject(options: InjectOptions): void`

Injects a component at the specified position. If a component is already injected, it will be removed first.

**Parameters:**
- `options.position` - The position where the component should be injected (see `InjectionPosition` enum)
- `options.component` - A factory function that returns a Preact VNode
- `options.props` (optional) - Props to pass to the component

#### `remove(): void`

Removes the currently injected component.

#### `getCurrentPosition(): InjectionPosition | null`

Returns the position of the currently injected component, or `null` if no component is injected.

#### `reset(): void`

Alias for `remove()`. Clears the currently injected component.

### Types

#### `InjectionPosition` (enum)

Available injection positions:
- `InjectionPosition.TopLeft` - Top-left corner overlay
- `InjectionPosition.TopRight` - Top-right corner overlay
- `InjectionPosition.BottomLeft` - Bottom-left corner overlay
- `InjectionPosition.BottomRight` - Bottom-right corner overlay
- `InjectionPosition.SideBySide` - Side-by-side layout with video player

#### `ComponentFactory`

```typescript
type ComponentFactory = (props?: Record<string, unknown>) => VNode;
```

A function that creates and returns a Preact component.

## Usage Example

```typescript
import { InjectionPosition } from './component-injection-manager';
import { h } from 'preact';

// Get the manager from the player
const manager = player.getService('componentInjectionManager');

// Define a custom component
const MyCustomComponent = ({ message }) => (
  <div style={{ padding: '10px', background: 'rgba(0,0,0,0.7)', color: 'white' }}>
    {message}
  </div>
);

// Inject the component at top-right corner
manager.inject({
  position: InjectionPosition.TopRight,
  component: (props) => <MyCustomComponent {...props} />,
  props: { message: 'Hello from overlay!' }
});

// Later, remove the component
manager.remove();

// Or inject at a different position
manager.inject({
  position: InjectionPosition.SideBySide,
  component: () => <MyCustomComponent message="Side by side view" />
});
```
