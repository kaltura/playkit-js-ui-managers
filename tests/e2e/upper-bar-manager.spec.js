import { expect } from 'chai';
import { createSandbox, spy } from 'sinon';
import '../../src/index';
import { setup, ui } from "@playkit-js/kaltura-player-js";
import { IconComponent } from '../mock/compenents/icon.component';
import { config, targetId } from '../mock/config';
import { mediaData } from '../mock/media-sourc';
import '../mock/plugins/index';
const { ReservedPresetNames } = ui;

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
    const iconId = upperBarManagerService.add({ displayName: 'icon', component: IconComponent, onClick: () => {} });

    // Expect
    expect(upperBarManagerService.componentsRegistry.size).to.equal(1);
    expect(upperBarManagerService.componentsRegistry.get(iconId).displayName).equal('icon');
  });

  it('Remove icon', async () => {
    // Given
    player = setup(config);
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();

    // Do
    const iconId = upperBarManagerService.add({ displayName: 'icon', component: IconComponent, onClick: () => {} });
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
    const iconId1 = upperBarManagerService.add({ displayName: 'icon1', component: IconComponent, onClick: () => {} });
    const iconId2 = upperBarManagerService.add({ displayName: 'icon2', component: IconComponent, onClick: () => {} });
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
      const icon1Id = upperBarManagerService.add({ displayName: 'icon1', component: IconComponent, onClick: () => {} });
      const icon2Id = upperBarManagerService.add({ displayName: 'icon2', component: IconComponent, onClick: () => {} });
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
      uiManagers: {},
      'Plugin-A': { iconOrder: 120 },
      'Plugin-B': { iconOrder: 150 },
      'Plugin-C': { iconOrder: 100 },
      'Plugin-D': { iconOrder: 130 },
      'Plugin-E': { iconOrder: 140 },
      'Plugin-F': { iconOrder: 110 }
    };

    player = setup({ ...config, plugins: pluginsConfig });
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });

    player.ready().then(() => {
      setTimeout(() => {
        const displayedBarComponentState = upperBarManagerService.getControls(upperBarManagerService.iconsOrder);
        // const displayedBarComponentState = Array.from(this.componentsRegistry.values());
        expect(displayedBarComponentState[0].displayName).to.be.equal('Plugin-C');
        expect(displayedBarComponentState[1].displayName).to.be.equal('Plugin-F');
        expect(displayedBarComponentState[2].displayName).to.be.equal('Plugin-A');
        expect(displayedBarComponentState[3].displayName).to.be.equal('Plugin-D');
        expect(displayedBarComponentState[4].displayName).to.be.equal('Plugin-E');
        expect(displayedBarComponentState[5].displayName).to.be.equal('Plugin-B');
        done();
      }, 1000);
    });
  });

  it('icons order state is preserved on change media', (done) => {
    // Given
    const pluginsConfig = {
      uiManagers: {},
      'Plugin-A': { iconOrder: 120 },
      'Plugin-B': { iconOrder: 150 },
      'Plugin-C': { iconOrder: 100 },
      'Plugin-D': { iconOrder: 130 },
      'Plugin-E': { iconOrder: 140 },
      'Plugin-F': { iconOrder: 110 }
    };

    player = setup({ ...config, plugins: pluginsConfig });
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });

    player.ready().then(() => {
      setTimeout(() => {
        const previousServiceRegistryState = JSON.parse(
          JSON.stringify(Array.from(upperBarManagerService.componentsRegistry.values()).map(({ id, displayName }) => ({ id, displayName })))
        );

        player.setMedia({ sources: { ...mediaData } });

        setTimeout(() => {
          const currentServiceRegistryState = Array.from(upperBarManagerService.componentsRegistry.values()).map(
            ({ id, displayName }) => ({ id, displayName })
          );
          expect(previousServiceRegistryState).to.be.deep.equal(currentServiceRegistryState);
          done();
        }, 100);
      }, 100);
    });
  });
});
