import {
  modal,
  post,
  portal,
  punctum
} from '../../../../src/store/areas/primary/works/works.selectors';
import { StoreState, Works, Work } from '../../../../src/store/store';
import { DEFAULT_AREA } from '../../../../src/store/initialState';

function genTestState(works: Works): StoreState {
  return {
    nav: {
      buttons:[]
    },
    areas: {
      active: DEFAULT_AREA,
      primary: {
        baseBinUrl: '.',
        works,
      },
    },
  };
}

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

const namespace = 'test';

describe('Works Selectors', () => {

  describe('Modal Selectors', () => {

    describe('selectVisible', () => {

      const { selectVisible } = modal;

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

      const { selectTitle } = post;

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

      const { selectSrc } = punctum;

      it('selects the correct values for the modal namespace', () => {
        const dummySrc = 'dummy.jpg';
        const state = genTestState({ [namespace]: { ...nullProps, src: dummySrc } });
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

    const { selectAlt } = punctum;

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
