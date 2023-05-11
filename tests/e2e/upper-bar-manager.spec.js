import { expect } from 'chai';
import { createSandbox, spy } from 'sinon';
import '../../src/index';
import { setup } from '@playkit-js/kaltura-player-js';
import { IconComponent } from '../mock/compenents/icon.component';
import { config, targetId } from '../mock/config';
import { mediaData } from '../mock/media-sourc';
import '../mock/plugins/index';

describe('Upper Bar Manager', () => {
  let player;
  let upperBarManagerService;
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

  it('Add icon', async () => {
    // Given
    player = setup(config);
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();

    // Do
    const iconId = upperBarManagerService.add({ label: 'icon', component: IconComponent, onClick: () => {} });

    // Expect
    expect(upperBarManagerService.componentsRegistry.size).to.equal(1);
    expect(upperBarManagerService.componentsRegistry.get(iconId).label).equal('icon');
  });

  it('Remove icon', async () => {
    // Given
    player = setup(config);
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();

    // Do
    const iconId = upperBarManagerService.add({ label: 'icon', component: IconComponent, onClick: () => {} });
    upperBarManagerService.remove(iconId);

    // Expect
    expect(upperBarManagerService.componentsRegistry.size).to.equal(0);
  });

  it('Is Icon Active', async () => {
    // Given
    player = setup(config);
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();

    // Do
    const iconId1 = upperBarManagerService.add({ label: 'icon1', component: IconComponent, onClick: () => {} });
    const iconId2 = upperBarManagerService.add({ label: 'icon2', component: IconComponent, onClick: () => {} });
    upperBarManagerService.remove(iconId1);

    // Expect
    expect(upperBarManagerService.isActive(iconId1)).to.be.false;
    expect(upperBarManagerService.isActive(iconId2)).to.be.true;
  });

  it('Update Icon', (done) => {
    // Given
    player = setup(config);
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });

    // Do
    player.ready().then(() => {
      const icon1Id = upperBarManagerService.add({ label: 'icon1', component: IconComponent, onClick: () => {} });
      const icon2Id = upperBarManagerService.add({ label: 'icon2', component: IconComponent, onClick: () => {} });
      setTimeout(() => {
        const iconModel1 = upperBarManagerService.componentsRegistry.get(icon1Id);
        const iconModel2 = upperBarManagerService.componentsRegistry.get(icon2Id);
        sandbox.spy(iconModel1.componentRef.current, 'render');
        sandbox.spy(iconModel2.componentRef.current, 'render');
        upperBarManagerService.update(icon1Id);

        // Expect
        setTimeout(() => {
          expect(iconModel1.componentRef.current.render.calledOnce).to.be.true;
          expect(iconModel2.componentRef.current.render.calledOnce).to.be.false;
        });
        done();
      });
    });
  });

  it('icons order state compatible with the configuration', (done) => {
    // Given
    const pluginsConfig = {
      uiManagers: {
        upperBarManager: {
          pluginsIconsOrder: {
            pluginC: 100,
            pluginF: 110,
            pluginA: 120,
            pluginD: 130,
            pluginE: 140,
            pluginB: 150
          }
        }
      },
      pluginA: {},
      pluginB: {},
      pluginC: {},
      pluginD: {},
      pluginE: {},
      pluginF: {}
    };

    player = setup({ ...config, plugins: pluginsConfig });
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });

    player.ready().then(() => {
      setTimeout(() => {
        const displayedBarComponentState = upperBarManagerService.displayedBarComponentRef.current.state;
        expect(displayedBarComponentState.controls[0].label).to.be.equal('pluginC');
        expect(displayedBarComponentState.controls[1].label).to.be.equal('pluginF');
        expect(displayedBarComponentState.controls[2].label).to.be.equal('pluginA');
        expect(displayedBarComponentState.controls[3].label).to.be.equal('pluginD');
        expect(displayedBarComponentState.controls[4].label).to.be.equal('pluginE');
        expect(displayedBarComponentState.controls[5].label).to.be.equal('pluginB');
        done();
      });
    });
  });

  it('icons order state is preserved on change media', (done) => {
    // Given
    const pluginsConfig = {
      uiManagers: {
        upperBarManager: {
          pluginsIconsOrder: {
            pluginC: 100,
            pluginF: 110,
            pluginA: 120,
            pluginD: 130,
            pluginE: 140,
            pluginB: 150
          }
        }
      },
      pluginA: {},
      pluginB: {},
      pluginC: {},
      pluginD: {},
      pluginE: {},
      pluginF: {}
    };

    player = setup({ ...config, plugins: pluginsConfig });
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });

    player.ready().then(() => {
      setTimeout(() => {
        const previousComponentControlsState = JSON.parse(
          JSON.stringify(
            upperBarManagerService.displayedBarComponentRef.current.state.controls.map(({ id, label }) => ({ id, label }))
          )
        );
        const previousServiceRegistryState = JSON.parse(
          JSON.stringify(Array.from(upperBarManagerService.componentsRegistry.values()).map(({ id, label }) => ({ id, label })))
        );

        player.setMedia({ sources: { ...mediaData } });

        setTimeout(() => {
          const currentComponentControlsState = upperBarManagerService.displayedBarComponentRef.current.state.controls.map(
            ({ id, label }) => ({ id, label })
          );
          const currentServiceRegistryState = Array.from(upperBarManagerService.componentsRegistry.values()).map(
            ({ id, label }) => ({ id, label })
          );
          expect(previousComponentControlsState).to.be.deep.equal(currentComponentControlsState);
          expect(previousServiceRegistryState).to.be.deep.equal(currentServiceRegistryState);
          done();
        }, 100);
      }, 100);
    });
  });
});
