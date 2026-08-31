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

    this.currentMediaType = 'vod'; // Track current media type

    // Setup media toggle immediately (doesn't need injection manager)
    this.setupMediaToggle();

    this.player.ready().then(() => {
      console.log('Player ready');
      this.initializeInjectionManager();
    });
  }

  initializeInjectionManager() {
    if (this.injectionManager) {
      console.log('Injection manager already initialized');
      return;
    }

    const injectionManager = this.player.getService('componentInjectionManager');

    if (!injectionManager) {
      console.warn('ComponentInjectionManager not yet available');
      return;
    }

    console.log('Injection manager initialized');
    this.injectionManager = injectionManager;
    // Setup injection controls after injection manager is available
    this.setupInjectionControls();
    this.updatePositionDisplay();
  }

  setupMediaToggle() {
    // Toggle media button
    document.getElementById('toggle-media').addEventListener('click', () => {
      this.toggleMedia();
    });
  }

  setupInjectionControls() {
    console.log('Setting up injection controls');

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

    // Inject Side-by-Side with Image button
    document.getElementById('inject-side-by-side-image').addEventListener('click', () => {
      this.injectComponentWithImage('side-by-side', RegularImageComponent, {});
    });

    // Remove component button
    document.getElementById('remove-component').addEventListener('click', () => {
      this.removeComponent();
    });
  }

  toggleMedia() {
    console.log('Toggle media clicked, current type:', this.currentMediaType);

    // Remove any existing injection before switching media
    this.injectionManager?.remove();

    if (this.currentMediaType === 'vod') {
      // Switch to Audio
      this.player.setMedia({
        sources: {
          type: 'Unknown',
          progressive: [
            {
              mimetype: 'video/mp4',
              url: 'https://samplelib.com/mp3/sample-20s.mp3'
            }
          ]
        }
      });
      this.currentMediaType = 'audio';
      this.updateMediaDisplay('Audio');
      this.updateToggleButton('Switch to VOD');
      this.toggleSideBySideButtons(true); // Show image button, hide regular
      console.log('Switched to Audio');
    } else {
      // Switch to VOD
      this.player.loadMedia({ entryId: '1_ebs5e9cy' });
      this.currentMediaType = 'vod';
      this.updateMediaDisplay('VOD');
      this.updateToggleButton('Switch to Audio');
      this.toggleSideBySideButtons(false); // Show regular button, hide image
      console.log('Switched to VOD');
    }

    // Initialize injection manager after media switch
    this.initializeInjectionManager();
    // Update position display after media switch
    this.updatePositionDisplay();
  }

  updateMediaDisplay(mediaType) {
    const mediaElement = document.getElementById('current-media');
    if (mediaElement) {
      mediaElement.textContent = mediaType;
      mediaElement.style.color = '#2ecc71';
      mediaElement.style.fontWeight = 'bold';
    }
  }

  updateToggleButton(text) {
    const toggleButton = document.getElementById('toggle-media');
    if (toggleButton) {
      toggleButton.textContent = text;
    }
  }

  toggleSideBySideButtons(showImage) {
    const regularButton = document.getElementById('inject-side-by-side');
    const imageButton = document.getElementById('inject-side-by-side-image');

    if (showImage) {
      regularButton.style.display = 'none';
      imageButton.style.display = 'inline-block';
    } else {
      regularButton.style.display = 'inline-block';
      imageButton.style.display = 'none';
    }
  }

  injectComponent(position, ComponentClass, props) {
    if (!this.injectionManager) {
      console.error('Injection manager not ready');
      return;
    }
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

  injectComponentWithImage(position, ComponentClass, props) {
    if (!this.injectionManager) {
      console.error('Injection manager not ready');
      return;
    }
    console.log('Injecting component with image...');
    this.injectionManager.inject({
      position,
      component: (componentProps) => {
        const { h } = KalturaPlayer.ui.preact;
        return h(ComponentClass, componentProps);
      },
      props: props,
      replaceVideoWithImageUrl: 'https://cfvod.nvq2.ovp.kaltura.com/p/9912/sp/991200/download/entry_id/0_tpi7z5e7/flavor/0_fgmt4m1f/ks/djJ8OTkxMnwfcQR_Wa7Aa7ALtRl989Yezk0C0zYT1xBjZn5IKdQGmBp8NXzil0OOTraNOaYebQRkI5vWbiMfhxaPSKOhhgplARKZvBMqvxK6MWzfEEqsY8X9HwGcupwgvMYtYY9vySpS_WL9kEFg7-WLU4Uh3FhuHun8RjeuOA8FjbRknEAa-t6AmZVIuiN0IRZxVdB8b4D-1CsM_R36tQUSRRxQaq85/file_name/Slide_0_tpi7z5e7_0_bjr63xiv_12_0006.jpg'
    });
    this.updatePositionDisplay();
    console.log(`Injected component with image at position: ${position}`);
  }


  removeComponent() {
    if (!this.injectionManager) {
      console.error('Injection manager not ready');
      return;
    }
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
    if (!this.injectionManager) {
      const positionElement = document.getElementById('current-position');
      if (positionElement) {
        positionElement.textContent = 'None';
        positionElement.style.color = '#e74c3c';
        positionElement.style.fontWeight = 'bold';
      }
      return;
    }
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
