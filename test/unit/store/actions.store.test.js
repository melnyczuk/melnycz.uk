import assert from 'assert';

import constants from '../../../src/store/constants';
import actionCreators from '../../../src/store/actions';

describe('Action Creators', () => {

  describe('Modal Action Creators', () => {

    const {
      SET_VISIBILITY
    } = constants;

    const {
      setModalVisibility
    } = actionCreators.modal;

    describe('setModalVisibility', () => {

      it('returns false if passed false', () => {
        const modalVisiblity = setModalVisibility({ namespace: 'test', value: false });
        assert.strictEqual(modalVisiblity.payload.namespace, 'test');
        assert.strictEqual(modalVisiblity.payload.value, false);
        assert.strictEqual(modalVisiblity.type, SET_VISIBILITY);
      });

      it('returns true if passed true', () => {
        const modalVisiblity = setModalVisibility({ namespace: 'test', value: true });
        assert.strictEqual(modalVisiblity.payload.namespace, 'test');
        assert.strictEqual(modalVisiblity.payload.value, true);
        assert.strictEqual(modalVisiblity.type, SET_VISIBILITY);
      });

      it('returns nothing if passed a non-boolean value', () => {
        const modalVisiblity = setModalVisibility({ namespace: 'test', value: 'hello' });
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

});
