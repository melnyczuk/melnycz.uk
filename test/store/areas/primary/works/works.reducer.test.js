import initialState from '../../../../../src/store/initialStore';
import { SET_VISIBLE } from '../../../../../src/store/constants';
import worksReducer from '../../../../../src/store/areas/primary/works/works.reducer';

describe('Works Reducer', () => {
  const { works } = initialState.areas.primary;

  it('returns the correct initial state', () => {
    const data = worksReducer(undefined, {});
    expect(data).toStrictEqual(works);
  });

  it('returns the existing state if no valid action type is dispatched', () => {
    const data = worksReducer(undefined, { payload: 'blah' });
    expect(data).toStrictEqual(works);
  });

  describe('SET_VISIBLE action', () => {
    const setModalVisibility = jest.fn(namespace => {
      return { type: SET_VISIBLE, namespace }
    });

    it('reduces the action payload', () => {

      const data = worksReducer(
        { test: { visible: false } },
        setModalVisibility('test')
      );
      console.log(data);
      expect(data.test.visible).toBe(true);
    });
  });
});
