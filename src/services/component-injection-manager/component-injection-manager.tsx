import { h } from 'preact';
import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';
import { InjectionPosition, InjectOptions, ComponentFactory } from './models';
import { CornerOverlay, SideBySideWrapper } from './ui';

export interface ComponentInjectionManagerOptions {
  kalturaPlayer: KalturaPlayer;
  eventManager: PlaykitUI.EventManager;
}

interface CurrentComponent {
  component: ComponentFactory;
  props?: Record<string, unknown>;
  position: InjectionPosition;
  removeFunction: () => void;
}

export class ComponentInjectionManager {
  private _kalturaPlayer: KalturaPlayer;
  private _eventManager: PlaykitUI.EventManager;
  private _currentComponent: CurrentComponent | null = null;

  constructor(options: ComponentInjectionManagerOptions) {
    this._kalturaPlayer = options.kalturaPlayer;
    this._eventManager = options.eventManager;
  }

  public inject(options: InjectOptions): void {
    // Remove existing component if any
    if (this._currentComponent) {
      this._removeCurrentComponent();
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

  public remove(): void {
    this._removeCurrentComponent();
    this._currentComponent = null;
  }

  public getCurrentPosition(): InjectionPosition | null {
    return this._currentComponent?.position || null;
  }

  public reset(): void {
    this.remove();
  }

  private _removeCurrentComponent(): void {
    if (!this._currentComponent) {
      return;
    }

    // Call removal function (SideBySideWrapper's cleanup will restore video)
    this._currentComponent.removeFunction();
  }

  private _renderComponent(options: InjectOptions): () => void {
    const { position, component, props } = options;

    // Handle all corner positions
    if (
      position === InjectionPosition.TopLeft ||
      position === InjectionPosition.TopRight ||
      position === InjectionPosition.BottomLeft ||
      position === InjectionPosition.BottomRight
    ) {
      return this._kalturaPlayer.ui.addComponent({
        label: `component-injection-${position}`,
        presets: ['Playback', 'Live'],
        container: 'VideoArea',
        get: () => <CornerOverlay position={position}>{component(props)}</CornerOverlay>
      });
    } else if (position === InjectionPosition.SideBySide) {
      return this._kalturaPlayer.ui.addComponent({
        label: 'component-injection-side-by-side',
        presets: ['Playback', 'Live'],
        container: 'PlayerArea',
        get: () => <SideBySideWrapper player={this._kalturaPlayer} component={component} componentProps={props} />
      });
    }

    // Fallback (should never happen)
    return () => {
      // No-op cleanup function
    };
  }
}
