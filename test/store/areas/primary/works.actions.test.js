import { actionConstants } from '../../../src/store/constants';
import {
  setModalVisibility as setWorkModalVisibility
} from '../../../src/store/areas/primary/works.actions';

describe('Modal Store Functions', () => {
  
  const {
    SET_VISIBLE
  } = actionConstants;

  describe('setWorkModalVisibile', () => {

    it('returns the namespace if passed a string', () => {
      const modalVisiblity = setWorkModalVisibility('test');
      expect(modalVisiblity.namespace).toStrictEqual('test');
      expect(modalVisiblity.type).toStrictEqual(SET_VISIBLE);
    });

    it('returns "payload: undefined" if passed an empty object', () => {
      const modalVisiblity = setWorkModalVisibility();
      expect(modalVisiblity).toStrictEqual({
        type: SET_VISIBLE,
        namespace: undefined
      });
    });

  });

});