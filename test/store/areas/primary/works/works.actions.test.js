import constants from '../../../../../src/store/constants';

import {
  setWorkModalVisibility
} from '../../../../../src/store/areas/primary/works/works.actions';

describe('Works Action Creators', () => {

    const {
      SET_VISIBILITY
    } = constants;

    describe('setWorkModalVisibility', () => {

      it('returns false if passed false', () => {
        const modalVisiblity = setWorkModalVisibility({ namespace: 'test', value: false });
        expect(modalVisiblity.payload.namespace).toStrictEqual('test');
        expect(modalVisiblity.payload.value).toBe(false);
        expect(modalVisiblity.type).toStrictEqual(SET_VISIBILITY);
      });

      it('returns true if passed true', () => {
        const modalVisiblity = setWorkModalVisibility({ namespace: 'test', value: true });
        expect(modalVisiblity.payload.namespace).toStrictEqual('test');
        expect(modalVisiblity.payload.value).toBe(true);
        expect(modalVisiblity.type).toStrictEqual(SET_VISIBILITY);
      });

      it('returns nothing if passed a non-boolean value', () => {
        const modalVisiblity = setWorkModalVisibility({ namespace: 'test', value: 'hello' });
        expect(modalVisiblity).toBeUndefined();
      });

      it('returns nothing if passed an object with no id', () => {
        const modalVisiblity = setWorkModalVisibility({ value: true });
        expect(modalVisiblity).toBeUndefined();
      });

      it('returns nothing if passed an empty object', () => {
        const modalVisiblity = setWorkModalVisibility({});
        expect(modalVisiblity).toBeUndefined();
      });

    });

});
