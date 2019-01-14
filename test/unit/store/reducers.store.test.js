import assert from 'assert';
import initialState from '../../../src/store/initialStore';
import worksReducer from '../../../src/store/reducers/viewers/main/works.reducer';
import actionCreators from '../../../src/store/actionCreators';

describe('Works Reducer', () => {

  const { works } = initialState.viewers.main;

  it('returns the correct initial state', () => {
    const data = worksReducer(undefined, {});
    assert.deepStrictEqual(data, works);
  });

  it('returns the existing state if no valid action type is dispatched', () => {
    const data = worksReducer(
      works,
      { payload: {
        namespace: 'test',
        value: true
      } });
    assert.deepStrictEqual(data, works);
  });

  describe('SET_VISIBILITY action', () => {

    const { setModalVisibility } = actionCreators.modal;

    it('reduces the action when the action payload value is a boolean', () => {
      const data = worksReducer(
        undefined,
        setModalVisibility({ namespace: 'test', value: true })
      );
      assert.strictEqual(data.test.visible, true);
    });

    it('returns the existing state when the action payload value is not a boolean', () => {
      const data = worksReducer(
        works,
        setModalVisibility({ namespace: 'test', value: 'blahhh' })
      );
      assert.deepStrictEqual(data, works);
    });

    it('returns the existing state when the action payload namespace is not present', () => {
      const data = worksReducer(
        works,
        setModalVisibility({ value: 'blahhh' })
      );
      assert.deepStrictEqual(data, works);
    });
  });


});
