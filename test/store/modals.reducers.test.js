import assert from 'assert';
import { modalReducer } from '../../src/store/modals.reducers';
import { setModalVisibility } from '../../src/store/modals.actions';
import { modalInitialState } from '../../src/store/modals.state';

describe('Modal Reducers', () => {

  it('returns the correct default state', () => {
    const data = modalReducer(undefined, {});
    assert.deepStrictEqual(data, modalInitialState);
  });

  describe('modalVisibilityReducer', () => {
    it('reduces SET_VISIBILITY action', () => {
      const data = modalReducer(undefined, setModalVisibility(true));
      assert.strictEqual(data.visible, true);
    });
  });
});
