import initialState from '../../../../src/store/initialState';
import worksReducer from '../../../../src/store/areas/primary/works/works.reducer';
import { actionConstants } from '../../../../src/store/constants';
import { Work } from '../../../../src/store/store.d';

const {
  SET_SHOW,
} = actionConstants;

describe('Works Reducer', () => {
  const { works } = initialState.areas.primary;

  const nullProps: Work = {
    visible: null,
    description: null,
    namespace: null,
    src: null,
    live: null,
    media: null,
    year: null,
    title: null,
    materials: null,
    type: null,
  }

  it('returns the correct initial state', () => {
    const data = worksReducer(undefined, { type: undefined, namespace: null });
    expect(data).toStrictEqual(works);
  });

  describe('SET_VISIBLE action', () => {
    const setModalVisible = jest.fn(namespace => ({ type: SET_SHOW, namespace }));

    it('reduces the action payload', () => {
      const data = worksReducer(
        { test: { ...nullProps, visible: false, } },
        setModalVisible('test'),
      );
      expect(data.test.visible).toBe(true);
    });
  });
});
