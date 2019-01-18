import {
  getWorkModalVisibility,
  getWorkPostTitle,
  getWorkPunctumAltText,
  getWorkPunctumSource,
} from '../../../../../src/store/areas/primary/works/works.selectors';

function genTestState(works) {
  return {
    areas: {
      primary: {
        works
      }
    }
  }
}

const namespace = 'test';

describe('Works Selectors', () => {
  describe('getWorkModalVisibility', () => {
    it('selects the correct values for the modal namespace', () => {
      const state = genTestState({ [namespace]: { visible: true } });
      const data = getWorkModalVisibility(state, { namespace });
      expect(data).toBe(true);
    });

    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = genTestState({ toast: { visible: true } });
      const data = getWorkModalVisibility(state, { namespace });
      expect(data).toBe(false);
    });
  });

  describe('getWorkPostTitle', () => {
    it('selects the post title', () => {
      const expectedTitle = 'tester';
      const state = genTestState({ [namespace]: { title: expectedTitle } });
      const data = getWorkPostTitle(state, { namespace });
      expect(data).toStrictEqual(expectedTitle);
    });

    it('returns null if the namespace is not in the store', () => {
      const state = genTestState({ toast: { title: 'tester' } });
      const data = getWorkPostTitle(state, { namespace });
      expect(data).toBeNull();
    });
  });

  describe('getPunctumImageSource', () => {
    it('selects the correct values for the modal namespace', () => {
      const dummySrc = './dummy.jpg';
      const state = genTestState({ [namespace]: { src: dummySrc } });
      const data = getWorkPunctumSource(state, { namespace });
      expect(data).toStrictEqual(dummySrc);
    });
    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = genTestState({ toast: { visible: true } });
      const data = getWorkPunctumSource(state, { namespace });
      expect(data).toBeNull();
    });
  });

  describe('getPunctumImageAltText', () => {
    it('selects the correct values for the modal namespace', () => {
      const dummyAltText = 'testText';
      const state = genTestState({ [namespace]: { alt: dummyAltText } });
      const data = getWorkPunctumAltText(state, { namespace });
      expect(data).toStrictEqual(dummyAltText);
    });

    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = genTestState({ toast: { visible: true } });
      const data = getWorkPunctumAltText(state, { namespace });
      expect(data).toBeNull();
    });
  });
});
