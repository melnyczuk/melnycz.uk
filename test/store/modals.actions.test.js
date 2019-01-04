import assert from 'assert';
import { setModalVisibility, SET_VISIBILITY } from '../../src/store/modals.actions';

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
