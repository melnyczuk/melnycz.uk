import portfolioReducer from '../../../src/store/portfolio/portfolio.reducer';
import { actionConstants } from '../../../src/store/constants';
import { WorkType } from '../../../src/types';

describe('Portfolio Reducer', () => {

  const portfolio = portfolioReducer(undefined, undefined);

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
    const data = portfolioReducer(undefined, { type: undefined, namespace: null });
    expect(data).toStrictEqual(portfolio);
  });

  describe('SET_SHOW action', () => {
    const { SET_SHOW } = actionConstants;

    const setModalShowMock = jest.fn(namespace => ({ type: SET_SHOW, namespace }));

    it('reduces the action payload', () => {
      const fakePortfolio =  { test: { ...nullProps, visible: false, } };
      const data = portfolioReducer(fakePortfolio, setModalShowMock('test'));
      expect(data.test.visible).toBe(true);
    });

  });

  describe('SET_HIDE action', () => {
    const { SET_HIDE } = actionConstants;

    const setModalHideMock = jest.fn(namespace => ({ type: SET_HIDE, namespace }));

    it('reduces the action payload', () => {
      const fakePortfolio =  { test: { ...nullProps, visible: true, } };
      const data = portfolioReducer(fakePortfolio, setModalHideMock('test'));
      expect(data.test.visible).toBe(false);
    });

  });
});
