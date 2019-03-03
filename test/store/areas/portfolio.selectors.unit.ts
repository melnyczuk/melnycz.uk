import {
  modalSelectors,
  postSelectors,
  mediaSelectors,
  punctumSelectors,
} from '../../../src/store/portfolio/portfolio.selectors';

import { StoreType, PortfolioType, WorkType } from '../../../src/types';

function genTestState(portfolio: PortfolioType): StoreType {
  return {
    about: null,
    nav: [],
    portfolio,
    media: {
      baseURL: '.',
    },
  };
}

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

const namespace = 'test';

describe('Works Selectors', () => {

  describe('Modal Selectors', () => {

    describe('selectVisible', () => {

      const { selectVisible } = modalSelectors;

      it('selects the correct values for the modal namespace', () => {
        const state = genTestState({ [namespace]: { ...nullProps, visible: true, } });
        const data = selectVisible(state, { namespace });
        expect(data).toBe(true);
      });

      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = genTestState({ toast: { ...nullProps, visible: true, } });
        const data = selectVisible(state, { namespace });
        expect(data).toBe(false);
      });

    });

  });

  describe('Post Selectors', () => {

    describe('selectTitle', () => {

      const { selectTitle } = postSelectors;

      it('selects the post title', () => {
        const expectedTitle = 'tester';
        const state = genTestState({ [namespace]: { ...nullProps, title: expectedTitle,  } });
        const data = selectTitle(state, { namespace });
        expect(data).toStrictEqual(expectedTitle);
      });

      it('returns null if the namespace is not in the store', () => {
        const state = genTestState({ toast: { ...nullProps, title: 'tester' } });
        const data = selectTitle(state, { namespace });
        expect(data).toBeNull();
      });

    });

  });
  describe('Punctum Selectors', () => {

    describe('selectSrc', () => {

      const { selectSrc } = punctumSelectors;

      it('selects the correct values for the modal namespace', () => {
        const dummySrc = 'dummy.jpg';
        const state = genTestState({ [namespace]: { ...nullProps, img: dummySrc } });
        const data = selectSrc(state, { namespace });
        expect(data).toStrictEqual(`./${dummySrc}`);
      });

      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = genTestState({ toast: { ...nullProps, visible: true } });
        const data = selectSrc(state, { namespace });
        expect(data).toBeNull();
      });

    });

  });

  describe('selectAlt', () => {

    const { selectAlt } = punctumSelectors;

    it('selects the correct values for the modal namespace', () => {
      const dummyAltText = 'testText';
      const state = genTestState({ [namespace]: { ...nullProps, title: dummyAltText } });
      const data = selectAlt(state, { namespace });
      expect(data).toStrictEqual(dummyAltText);
    });

    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = genTestState({ toast: { ...nullProps, visible: true } });
      const data = selectAlt(state, { namespace });
      expect(data).toBeNull();
    });

  });

});
