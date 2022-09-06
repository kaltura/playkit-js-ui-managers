import { expect } from 'chai';
import '../../src/index';
import { setup } from 'kaltura-player-js';
import { IconComponent } from '../mock/compenents/icon.component';
import { config, targetId } from '../mock/config';
import { mediaData } from '../mock/media-sourc';

describe('Upper Bar Manager', function () {
  let player;
  let upperBarManagerService;

  before(function () {
    const element = document.createElement('DIV');
    element.id = targetId;
    document.body.appendChild(element);
  });

  after(function () {
    document.getElementById(targetId).remove();
  });

  afterEach(function () {
    player.destroy();
    for (let element of document.getElementsByTagName('video')) {
      element.remove();
    }
  });

  it('Add icon', async()  => {
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

  it('Remove icon', async()  => {
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

  it('Is Icon Active', async()  => {
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
});
