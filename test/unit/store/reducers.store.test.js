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

  describe('SET_VISIBILITY action', () => {

    const { setModalVisibility } = actionCreators.modal;

    it('reduces the action when the action is a valid object', () => {
      const data = worksReducer(undefined,
        setModalVisibility({ namespace: 'test', value: true })
      );

      assert.strictEqual(data.test.visible, true);
    });

    it('returns the exisiting state when the action is not a valid object', () => {
      const data = worksReducer(works,
        setModalVisibility({ namespace: 'test', value: 'blahhh' })
      );

      assert.deepStrictEqual(data, works);
    });

  });


});
