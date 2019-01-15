import constants from '../../../src/store/constants';
import actionCreators from '../../../src/store/actionCreators';

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
        expect(modalVisiblity.payload.namespace).toStrictEqual('test');
        expect(modalVisiblity.payload.value).toBe(false);
        expect(modalVisiblity.type).toStrictEqual(SET_VISIBILITY);
      });

      it('returns true if passed true', () => {
        const modalVisiblity = setModalVisibility({ namespace: 'test', value: true });
        expect(modalVisiblity.payload.namespace).toStrictEqual('test');
        expect(modalVisiblity.payload.value).toBe(true);
        expect(modalVisiblity.type).toStrictEqual(SET_VISIBILITY);
      });

      it('returns nothing if passed a non-boolean value', () => {
        const modalVisiblity = setModalVisibility({ namespace: 'test', value: 'hello' });
        expect(modalVisiblity).toBeUndefined();
      });

      it('returns nothing if passed an object with no id', () => {
        const modalVisiblity = setModalVisibility({ value: true });
        expect(modalVisiblity).toBeUndefined();
      });

      it('returns nothing if passed an empty object', () => {
        const modalVisiblity = setModalVisibility({});
        expect(modalVisiblity).toBeUndefined();
      });

    });

  });

});
