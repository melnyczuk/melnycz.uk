import assert from 'assert';
import modalStore from '../../src/components/modal/modal.store';

const { SET_VISIBILITY } = modalStore.constants;
const { setModalVisibility } = modalStore.actionCreators;
const { modalReducer } = modalStore;
const { selectModalVisibility } = modalStore.selectors;

describe('Modal Store Functionality', () => {

  describe('Modal Action Creators', () => {

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

  describe('Modal Reducers', () => {

    it('returns the correct initial state', () => {
      const data = modalReducer(undefined, {});
      assert.deepStrictEqual(data, modalStore.initialState);
    });

    describe('modalVisibilityReducer', () => {

      describe('SET_VISIBILITY action', () => {

        it('reduces the action when the action is a valid object', () => {
          const data = modalReducer(undefined, 
            setModalVisibility({ namespace: 'test', value: true })
          );

          assert.strictEqual(data.test.visible, true);
        });

        it('returns the exisiting state when the action is not a valid object', () => {
          const existingState = {
            test: {
              src: './dummySrc.jpg',
              alt: 'dummyalt'
            }
          }

          const data = modalReducer(existingState, 
            setModalVisibility({ namespace: 'test', value: 'blahhh' })
          );

          assert.deepStrictEqual(data, existingState);
        });
      
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

});