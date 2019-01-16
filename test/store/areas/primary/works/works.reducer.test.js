import configureStore from 'redux-mock-store';

import initialState from '../../../../../src/store/initialStore';
import { SET_VISIBILITY } from '../../../../../src/store/constants';
import worksReducer from '../../../../../src/store/areas/primary/works/works.reducer';

describe('Works Reducer', () => {
  const { works } = initialState.areas.primary;

  it('returns the correct initial state', () => {
    const data = worksReducer(undefined, {});
    expect(data).toStrictEqual(works);
  });

  it('returns the existing state if no valid action type is dispatched', () => {
    const data = worksReducer(
      undefined,
      { payload: {
        namespace: 'test',
        value: true
      } });

    expect(data).toStrictEqual(works);
  });

  describe('SET_VISIBILITY action', () => {
    const setModalVisibility = jest.fn(value => {
      return {
        type: SET_VISIBILITY,
        payload: { namespace: 'test', value }
      }
    });

    it('reduces the action payload', () => {

      const data = worksReducer(
        undefined,
        setModalVisibility(true)
      );

      expect(data.test.visible).toBe(true);
    });
  });
});
