import worksReducer from '../../../src/store/works/works.reducer';
import { actionConstants } from '../../../src/store/constants';
import { WorkType } from '../../../src/store/types';

describe('Works Reducer', () => {

  const works = worksReducer(undefined, undefined);

  const nullProps: WorkType = {
    visible: null,
    description: null,
    namespace: null,
    img: null,
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

  describe('SET_SHOW action', () => {
    const { SET_SHOW } = actionConstants;

    const setModalShowMock = jest.fn(namespace => ({ type: SET_SHOW, namespace }));

    it('reduces the action payload', () => {
      const fakeWorks =  { test: { ...nullProps, visible: false, } };
      const data = worksReducer(fakeWorks, setModalShowMock('test'));
      expect(data.test.visible).toBe(true);
    });

  });

  describe('SET_HIDE action', () => {
    const { SET_HIDE } = actionConstants;

    const setModalHideMock = jest.fn(namespace => ({ type: SET_HIDE, namespace }));

    it('reduces the action payload', () => {
      const fakeWorks =  { test: { ...nullProps, visible: true, } };
      const data = worksReducer(fakeWorks, setModalHideMock('test'));
      expect(data.test.visible).toBe(false);
    });

  });
});
