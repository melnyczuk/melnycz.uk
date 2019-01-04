import assert from 'assert';
import { modalReducer } from '../../src/store/modal.reducers';
import { setModalVisibility } from '../../src/store/modal.actions';
import { modalInitialState } from '../../src/store/modal.state';

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
