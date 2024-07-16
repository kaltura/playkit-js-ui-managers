import { expect } from 'chai';
import { createSandbox } from 'sinon';
import '../../src/index';
import '../mock/plugins/index';
import { MoveControlsManager } from '../../src/services/upper-bar-manager/move-controls-manager';

describe('Move Controls Manager', () => {
  const bottomBarRegistryManager = {
    getComponentItem: () => {
      return {
        ariaLabel: 'aria-label'
      };
    }
  };

  const player = {
    getService: () => {
      return bottomBarRegistryManager;
    }
  };

  const logger = {
    debug: () => {}
  };

  const upperBarManager = {
    add: () => 3,
    remove: () => {}
  };

  const redux = {
    useStore: () => {},
    subscribe: () => {}
  };

  const sandbox = createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('Should add PictureInPicture to the upper bar', async () => {
    // Given
    sandbox.stub(redux, 'useStore').returns({
      subscribe: () => {},
      getState: () => {
        return { bottomBar: { controlsToMove: [] } };
      }
    });
    sandbox.stub(redux, 'subscribe').returns({});
    const manager = new MoveControlsManager(player, logger, upperBarManager, redux);
    sandbox.stub(manager, 'state').get(() => {
      return { bottomBar: { controlsToMove: ['PictureInPicture'] } };
    });
    const spy = sandbox.spy(manager.upperBarManager, 'add');

    // Do
    manager.handleStoreChange();

    // Expect
    spy.calledOnce;
    expect(manager.iconIds.size).to.equal(1);
    expect(manager.iconIds.get('PictureInPicture')).to.equal(3);
  });

  it('Should remove PictureInPicture from the upper bar', async () => {
    // Given
    sandbox.stub(redux, 'useStore').returns({
      subscribe: () => {},
      getState: () => {
        return { bottomBar: { controlsToMove: ['PictureInPicture'] } };
      }
    });
    sandbox.stub(redux, 'subscribe').returns({});
    const manager = new MoveControlsManager(player, logger, upperBarManager, redux);
    sandbox.stub(manager, 'state').get(() => {
      return { bottomBar: { controlsToMove: [] } };
    });

    // Do
    manager.handleStoreChange();

    // Expect
    expect(manager.iconIds.size).to.equal(0);
  });
});
