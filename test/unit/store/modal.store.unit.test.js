import assert from 'assert';
import {
  SET_VISIBILITY,
  modalInitialState,
  setModalVisibility,
  reduceModal,
  selectModalVisibility
} from '../../../src/store/modal.store';

describe('Modal Action Creators', () => {
  describe('setModalVisibility', () => {
    it('returns false if passed false', () => {
      const modalVisiblity = setModalVisibility({ key: 'test', value: false });
      assert.strictEqual(modalVisiblity.payload.key, 'test');
      assert.strictEqual(modalVisiblity.payload.value, false);
      assert.strictEqual(modalVisiblity.type, SET_VISIBILITY);
    });

    it('returns true if passed true', () => {
      const modalVisiblity = setModalVisibility({ key: 'test', value: true });
      assert.strictEqual(modalVisiblity.payload.key, 'test');
      assert.strictEqual(modalVisiblity.payload.value, true);
      assert.strictEqual(modalVisiblity.type, SET_VISIBILITY);
    });

    it('returns nothing if passed a non-boolean value', () => {
      const modalVisiblity = setModalVisibility({ key: 'test', value: 'hello' });
      assert.strictEqual(modalVisiblity, undefined);
    });

    it('returns nothing if passed an object with no id', () => {
      const modalVisiblity = setModalVisibility({ value: true });
      assert.strictEqual(modalVisiblity, undefined);
    });

    it('returns nothing if passed an empty object', () => {
      const modalVisiblity = setModalVisibility({});
      assert.strictEqual(modalVisiblity, undefined);
    });
  });
});

describe('Modal Reducers', () => {
  it('returns the correct initial state', () => {
    const data = reduceModal(undefined, {});
    assert.deepStrictEqual(data, modalInitialState);
  });

  describe('modalVisibilityReducer', () => {
    it('reduces SET_VISIBILITY action', () => {
      const data = reduceModal(undefined, 
        setModalVisibility({ key: 'test', value: true })
      );
      assert.strictEqual(data.test.visible, true);
    });
  });
});

describe('Modal Selectors', () => {
  describe('selectModalVisibility', () => {
    it('selects the correct values for the modal namespace', () => {
      const namespace = 'testModal';
      const state = { [namespace]: { visible: true } }
      const data = selectModalVisibility(state, 'testModal');
      assert.strictEqual(data, true);
    });
    
    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = { visible: true };
      const data = selectModalVisibility(state);
      assert.strictEqual(data, false);
    });
  });
});
