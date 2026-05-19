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
  elementRef?: HTMLElement;
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
    const { removeFunction, elementRef } = this._renderComponent(options);

    this._currentComponent = {
      component: options.component,
      props: options.props,
      position: options.position,
      removeFunction,
      elementRef
    };
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

    const element = this._currentComponent.elementRef;
    if (element) {
      // Trigger exit animation
      const exitEvent = new CustomEvent('trigger-exit');
      element.dispatchEvent(exitEvent);

      // Wait for animation to complete before removing
      const handleAnimationEnd = () => {
        this._currentComponent?.removeFunction();
      };

      element.addEventListener('animationend', handleAnimationEnd, { once: true });
    } else {
      // No element reference, remove immediately
      this._currentComponent.removeFunction();
    }
  }

  private _renderComponent(options: InjectOptions): { removeFunction: () => void; elementRef?: HTMLElement } {
    const { position, component, props } = options;

    if (position === InjectionPosition.BottomRight) {
      const removeFunction = this._kalturaPlayer.ui.addComponent({
        label: 'component-injection-bottom-right',
        presets: ['Playback', 'Live'],
        container: 'VideoArea',
        get: () => <BottomRightOverlay>{component(props)}</BottomRightOverlay>
      });

      return { removeFunction };
    } else if (position === InjectionPosition.SideBySide) {
      const removeFunction = this._kalturaPlayer.ui.addComponent({
        label: 'component-injection-side-by-side',
        presets: ['Playback', 'Live'],
        container: 'PlayerArea',
        get: () => <SideBySideWrapper player={this._kalturaPlayer} component={component} componentProps={props} />
      });

      return { removeFunction };
    }

    // Fallback (should never happen)
    return {
      removeFunction: () => {
        // No-op cleanup function
      }
    };
  }
}
