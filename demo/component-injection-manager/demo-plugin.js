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
    // Inject Bottom-Right button
    document.getElementById('inject-bottom-right').addEventListener('click', () => {
      this.injectComponent('bottom-right', RoundImageComponent, {
        src: 'avatar-image.png',
        title: 'Bottom Right Image'
      });
      this.currentComponentType = 'image';
    });

    // Inject Side-by-Side button
    document.getElementById('inject-side-by-side').addEventListener('click', () => {
      this.injectComponent('side-by-side', RegularImageComponent, {});
      this.currentComponentType = 'videoInfo';
    });

    // Switch to Bottom-Right button
    document.getElementById('switch-to-bottom-right').addEventListener('click', () => {
      this.switchPosition('bottom-right');
    });

    // Switch to Side-by-Side button
    document.getElementById('switch-to-side-by-side').addEventListener('click', () => {
      this.switchPosition('side-by-side');
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

  switchPosition(position) {
    const currentPosition = this.injectionManager.getCurrentPosition();
    if (!currentPosition) {
      alert('No component to switch. Please inject a component first.');
      return;
    }
    if (currentPosition === position) {
      alert(`Component is already at ${position} position.`);
      return;
    }

    this.injectionManager.remove();
    switch (position) {
      case 'bottom-right':
        this.injectComponent('bottom-right', RoundImageComponent, {
          src: 'avatar-image.png',
          title: 'Bottom Right Image'
        });
        break;
      case 'side-by-side':
        this.injectComponent('side-by-side', RegularImageComponent, {});
        break;
      default:
        console.log(`Position: [${position}] is not supported`);
        break;
    }

    console.log(`Switched to position: ${position}`);
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
