  import { actionConstants } from '../../../../src/store/constants';
import {
  modal,
} from '../../../../src/store/areas/primary/works/works.actions';

describe('Works Action Creators', () => {

  describe('Modal Action Creators', () => {

    const {
      SET_SHOW,
    } = actionConstants;

    describe('setModalVisibility', () => {
      const { setModalShow } = modal;
      it('returns the namespace if passed a string',
        () => {

          const modalVisiblity = setModalShow('test');

          expect(modalVisiblity.namespace).toStrictEqual('test');
          expect(modalVisiblity.type).toStrictEqual(SET_SHOW);

        });

      it('returns "payload: undefined" if passed an empty object',
        () => {

          const modalVisiblity = setModalShow('');

          expect(modalVisiblity).toStrictEqual({
            type: SET_SHOW,
            namespace: undefined,
          });

        });

    });

  });

});
