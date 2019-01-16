import initialState from '../../../src/store/initialStore';
import worksReducer from '../../../src/store/reducers/areas/main/works.reducer';
import actionCreators from '../../../src/store/actionCreators';

describe('Works Reducer', () => {

  const { works } = initialState.areas.main;

  it('returns the correct initial state', () => {
    const data = worksReducer(undefined, {});
    expect(data).toStrictEqual(works);
  });

  it('returns the existing state if no valid action type is dispatched', () => {
    const data = worksReducer(
      works,
      { payload: {
        namespace: 'test',
        value: true
      } });
    expect(data).toStrictEqual(works);
  });

  describe('SET_VISIBILITY action', () => {

    const { setModalVisibility } = actionCreators.modal;

    it('reduces the action when the action payload value is a boolean', () => {
      const data = worksReducer(
        undefined,
        setModalVisibility({ namespace: 'test', value: true })
      );
      expect(data.test.visible).toBe(true);
    });

    it('returns the existing state when the action payload value is not a boolean', () => {
      const data = worksReducer(
        works,
        setModalVisibility({ namespace: 'test', value: 'blahhh' })
      );
      expect(data).toStrictEqual(works);
    });

    it('returns the existing state when the action payload namespace is not present', () => {
      const data = worksReducer(
        works,
        setModalVisibility({ value: 'blahhh' })
      );
      expect(data).toStrictEqual(works);
    });
  });


});
