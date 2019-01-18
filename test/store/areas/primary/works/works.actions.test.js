import constants from '../../../../../src/store/constants';

import {
  setWorkModalVisible
} from '../../../../../src/store/areas/primary/works/works.actions';

describe('Works Action Creators', () => {

    const {
      SET_VISIBLE
    } = constants;

    describe('setWorkModalVisibile', () => {

      it('returns the namespace if passed a string', () => {
        const modalVisiblity = setWorkModalVisible('test');
        expect(modalVisiblity.namespace).toStrictEqual('test');
        expect(modalVisiblity.type).toStrictEqual(SET_VISIBLE);
      });

      it('returns "payload: undefined" if passed an empty object', () => {
        const modalVisiblity = setWorkModalVisible();
        expect(modalVisiblity).toStrictEqual({
          type: SET_VISIBLE,
          namespace: undefined
        });
      });

    });

});
