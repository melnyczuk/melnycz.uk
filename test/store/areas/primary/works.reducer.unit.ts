import initialState from '../../../../src/store/initialState';
import worksReducer from '../../../../src/store/areas/primary/works/works.reducer';
import { actionConstants } from '../../../../src/store/constants';

const {
  SET_VISIBLE,
} = actionConstants;

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
    const setModalVisible = jest.fn(namespace => ({ type: SET_VISIBLE, namespace }));

    it('reduces the action payload', () => {
      const data = worksReducer(
        { test: { visible: false } },
        setModalVisible('test'),
      );
      expect(data.test.visible).toBe(true);
    });
  });
});
