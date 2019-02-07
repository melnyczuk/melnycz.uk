import { actionConstants } from '../../../../src/store/constants';
import {
  setModalVisibility,
} from '../../../../src/store/areas/primary/works/works.actions';

describe('Works Action Creators', () => {

  describe('Modal Action Creators', () => {

    const {
      SET_VISIBLE,
    } = actionConstants;

    describe('setModalVisibility', () => {

      it('returns the namespace if passed a string',
        () => {

          const modalVisiblity = setModalVisibility('test');

          expect(modalVisiblity.namespace).toStrictEqual('test');
          expect(modalVisiblity.type).toStrictEqual(SET_VISIBLE);
          
        });

      it('returns "payload: undefined" if passed an empty object',
        () => {

          const modalVisiblity = setModalVisibility();

          expect(modalVisiblity).toStrictEqual({
            type: SET_VISIBLE,
            namespace: undefined,
          });

        });

    });

  });

});