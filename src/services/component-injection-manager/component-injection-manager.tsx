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

  public switchPosition(position: InjectionPosition): void {
    if (!this._currentComponent) {
      return;
    }

    // Skip if already at this position
    if (this._currentComponent.position === position) {
      return;
    }

    // Store component and props
    const { component, props } = this._currentComponent;

    // Re-inject at new position (handles cleanup automatically)
    this.inject({ position, component, props });
  }

  public remove(): void {
    this._removeCurrentComponent();
    this._currentComponent = null;
  }

  public getCurrentPosition(): InjectionPosition | null {
    return this._currentComponent?.position || null;
  }

  public destroy(): void {
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
    this._eventManager.listenOnce(this._kalturaPlayer, 'error', () => {
      console.error('[ComponentInjectionManager] Invalid injection position:', position);
    });
    return () => {};
  }
}
