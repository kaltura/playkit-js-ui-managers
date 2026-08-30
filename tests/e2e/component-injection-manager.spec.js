import { expect } from 'chai';
import { createSandbox } from 'sinon';
import '../../src/index';
import { setup, ui } from '@playkit-js/kaltura-player-js';
import { TestComponent } from '../mock/compenents/test.component';
import { config, targetId } from '../mock/config';
import { mediaData } from '../mock/media-sourc';

const { h } = ui;

describe('Component Injection Manager', () => {
  let player;
  let componentInjectionManager;
  const sandbox = createSandbox();

  before(() => {
    const element = document.createElement('DIV');
    element.id = targetId;
    document.body.appendChild(element);
  });

  after(() => {
    document.getElementById(targetId).remove();
  });

  afterEach(() => {
    player.destroy();
    for (const element of document.getElementsByTagName('video')) {
      element.remove();
    }
    sandbox.restore();
  });

  describe('Basic Injection', () => {
    it('should inject a component at top-left position', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do
      componentInjectionManager.inject({
        position: 'top-left',
        component: (props) => h(TestComponent, props),
        props: { title: 'Test Title' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('top-left');
    });

    it('should inject a component at top-right position', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do
      componentInjectionManager.inject({
        position: 'top-right',
        component: (props) => h(TestComponent, props),
        props: { title: 'Test Title' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('top-right');
    });

    it('should inject a component at bottom-left position', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do
      componentInjectionManager.inject({
        position: 'bottom-left',
        component: (props) => h(TestComponent, props),
        props: { title: 'Test Title' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('bottom-left');
    });

    it('should inject a component at bottom-right position', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do
      componentInjectionManager.inject({
        position: 'bottom-right',
        component: (props) => h(TestComponent, props),
        props: { title: 'Test Title' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('bottom-right');
    });

    it('should inject a component at side-by-side position', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do
      componentInjectionManager.inject({
        position: 'side-by-side',
        component: (props) => h(TestComponent, props),
        props: { title: 'Test Title' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('side-by-side');

      // CRITICAL: Remove side-by-side injection immediately after this test
      // to prevent DOM interference with subsequent tests
      componentInjectionManager.remove();
    });

    it('should inject component with props', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      const testProps = {
        title: 'Test Component',
        message: 'This is a test message'
      };

      // Do
      componentInjectionManager.inject({
        position: 'top-left',
        component: (props) => h(TestComponent, props),
        props: testProps
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('top-left');
    });

    it('should inject component without props', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do
      componentInjectionManager.inject({
        position: 'top-left',
        component: () => h('div', null, 'Simple component')
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('top-left');
    });
  });

  describe('Component Removal', () => {
    it('should remove an injected component', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      componentInjectionManager.inject({
        position: 'top-left',
        component: (props) => h(TestComponent, props),
        props: { title: 'Test Title' }
      });

      // Do
      componentInjectionManager.remove();

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.be.null;
    });

    it('should handle remove when no component is injected', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do
      componentInjectionManager.remove();

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.be.null;
    });

    it('should reset (alias for remove)', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      componentInjectionManager.inject({
        position: 'bottom-right',
        component: (props) => h(TestComponent, props),
        props: { title: 'Test Title' }
      });

      // Do
      componentInjectionManager.reset();

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.be.null;
    });
  });

  describe('Single Component Constraint', () => {
    it('should replace existing component when injecting a new one', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do - inject first component
      componentInjectionManager.inject({
        position: 'top-left',
        component: (props) => h(TestComponent, props),
        props: { title: 'First Component' }
      });

      expect(componentInjectionManager.getCurrentPosition()).to.equal('top-left');

      // Do - inject second component (should replace first)
      componentInjectionManager.inject({
        position: 'bottom-right',
        component: (props) => h(TestComponent, props),
        props: { title: 'Second Component' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('bottom-right');
    });

    it('should replace corner overlay with side-by-side', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do - inject corner overlay
      componentInjectionManager.inject({
        position: 'top-right',
        component: (props) => h(TestComponent, props),
        props: { title: 'Corner Component' }
      });

      expect(componentInjectionManager.getCurrentPosition()).to.equal('top-right');

      // Do - inject side-by-side (should replace corner)
      componentInjectionManager.inject({
        position: 'side-by-side',
        component: (props) => h(TestComponent, props),
        props: { title: 'Side Component' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('side-by-side');

      // CRITICAL: Remove side-by-side injection immediately after this test
      // to prevent DOM interference with subsequent tests
      componentInjectionManager.remove();
    });

    it('should replace side-by-side with corner overlay', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Do - inject side-by-side
      componentInjectionManager.inject({
        position: 'side-by-side',
        component: (props) => h(TestComponent, props),
        props: { title: 'Side Component' }
      });

      expect(componentInjectionManager.getCurrentPosition()).to.equal('side-by-side');

      // Do - inject corner overlay (should replace side-by-side)
      componentInjectionManager.inject({
        position: 'bottom-left',
        component: (props) => h(TestComponent, props),
        props: { title: 'Corner Component' }
      });

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.equal('bottom-left');
    });
  });

  describe('Position Tracking', () => {
    it('should return null position when no component is injected', async () => {
      // Given
      player = setup(config);
      componentInjectionManager = player.getService('componentInjectionManager');
      player.setMedia({ sources: { ...mediaData } });
      await player.ready();

      // Expect
      expect(componentInjectionManager.getCurrentPosition()).to.be.null;
    });
  });
});
