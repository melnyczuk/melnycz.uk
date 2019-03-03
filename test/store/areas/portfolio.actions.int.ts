import { 
  actionConstants 
} from '../../../src/store/constants';

import {
  modalActions,
} from '../../../src/store/portfolio/portfolio.actions';

describe('Works Action Creators', () => {

  describe('Modal Action Creators', () => {

    const {
      SET_SHOW,
    } = actionConstants;

    describe('setModalVisibility', () => {

      const { setModalShow } = modalActions;
      
      it('returns the namespace if passed a string',
        () => {

          const modalVisiblity = setModalShow('test');

          expect(modalVisiblity.namespace).toStrictEqual('test');
          expect(modalVisiblity.type).toStrictEqual(SET_SHOW);

        });

      it('returns "payload: undefined" if passed undefined',
        () => {

          const modalVisiblity = setModalShow(undefined);

          expect(modalVisiblity).toStrictEqual({
            type: SET_SHOW,
            namespace: undefined,
          });

        });

    });

  });

});
