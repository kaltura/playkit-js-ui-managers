const { BasePlugin, registerPlugin } = KalturaPlayer;

import {
  RoundImageComponent,
  RegularImageComponent
} from './components.js';

export const pluginName = 'demoPlugin';

export class demoPlugin extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);

    this.player.ready().then(() => {
      const injectionManager = this.player.getService('componentInjectionManager');

      if (!injectionManager) {
        console.error('ComponentInjectionManager not found!');
        return;
      }

      this.injectionManager = injectionManager;
      this.setupControls();
      this.updatePositionDisplay();
    });
  }

  setupControls() {
    // Corner position buttons
    document.getElementById('inject-top-left').addEventListener('click', () => {
      this.injectComponent('top-left', RoundImageComponent, {
        title: 'Top Left Image'
      });
    });

    document.getElementById('inject-top-right').addEventListener('click', () => {
      this.injectComponent('top-right', RoundImageComponent, {
        title: 'Top Right Image'
      });
    });

    document.getElementById('inject-bottom-left').addEventListener('click', () => {
      this.injectComponent('bottom-left', RoundImageComponent, {
        title: 'Bottom Left Image'
      });
    });

    document.getElementById('inject-bottom-right').addEventListener('click', () => {
      this.injectComponent('bottom-right', RoundImageComponent, {
        title: 'Bottom Right Image'
      });
    });

    // Inject Side-by-Side button
    document.getElementById('inject-side-by-side').addEventListener('click', () => {
      this.injectComponent('side-by-side', RegularImageComponent, {});
    });

    // Remove component button
    document.getElementById('remove-component').addEventListener('click', () => {
      this.removeComponent();
    });
  }

  injectComponent(position, ComponentClass, props) {
    this.injectionManager.inject({
      position,
      component: (componentProps) => {
        const { h } = KalturaPlayer.ui.preact;
        return h(ComponentClass, componentProps);
      },
      props: props
    });
    this.updatePositionDisplay();
    console.log(`Injected component at position: ${position}`);
  }


  removeComponent() {
    const currentPosition = this.injectionManager.getCurrentPosition();
    if (!currentPosition) {
      alert('No component to remove.');
      return;
    }

    this.injectionManager.remove();
    this.updatePositionDisplay();
    console.log('Component removed');
  }

  updatePositionDisplay() {
    const position = this.injectionManager.getCurrentPosition();
    const positionElement = document.getElementById('current-position');
    if (positionElement) {
      positionElement.textContent = position || 'None';
      positionElement.style.color = position ? '#2ecc71' : '#e74c3c';
      positionElement.style.fontWeight = 'bold';
    }
  }

  static isValid() {
    return true;
  }

  reset() {
    if (this.injectionManager) {
      this.injectionManager.remove();
    }
  }

  destroy() {
    if (this.injectionManager) {
      this.injectionManager.remove();
    }
    super.destroy();
  }
}

registerPlugin(pluginName, demoPlugin);
