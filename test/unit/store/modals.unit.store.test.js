import assert from 'assert';
import {
  SET_VISIBILITY,
  modalInitialState,
  setModalVisibility,
  modalReducer
} from '../../../src/store/modal.store';

describe('Modal Action Creators', () => {
  describe('setModalVisibility', () => {
    it('returns false if passed false', () => {
      const modalVisiblity = setModalVisibility(false);
      assert.strictEqual(modalVisiblity.payload, false);
      assert.strictEqual(modalVisiblity.type, SET_VISIBILITY);
    });

    it('returns true if passed true', () => {
      const modalVisiblity = setModalVisibility(true);
      assert.strictEqual(modalVisiblity.payload, true);
      assert.strictEqual(modalVisiblity.type, SET_VISIBILITY);
    });

    it('returns nothing if passed a non-boolean value', () => {
      const modalVisiblity = setModalVisibility('hello');
      assert.strictEqual(modalVisiblity, undefined);
    });
  });
});

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

