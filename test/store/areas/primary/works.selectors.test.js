import {
  selectWorkModalVisibility,
  selectWorkPostTitle,
  selectWorkPunctumAltText,
  selectWorkPunctumSource,
} from '../../../../src/store/areas/primary/works/works.selectors';

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
  describe('selectWorkModalVisibility', () => {
    it('selects the correct values for the modal namespace', () => {
      const state = genTestState({ [namespace]: { visible: true } });
      const data = selectWorkModalVisibility(state, { namespace });
      expect(data).toBe(true);
    });

    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = genTestState({ toast: { visible: true } });
      const data = selectWorkModalVisibility(state, { namespace });
      expect(data).toBe(false);
    });
  });

  describe('selectWorkPostTitle', () => {
    it('selects the post title', () => {
      const expectedTitle = 'tester';
      const state = genTestState({ [namespace]: { title: expectedTitle } });
      const data = selectWorkPostTitle(state, { namespace });
      expect(data).toStrictEqual(expectedTitle);
    });

    it('returns null if the namespace is not in the store', () => {
      const state = genTestState({ toast: { title: 'tester' } });
      const data = selectWorkPostTitle(state, { namespace });
      expect(data).toBeNull();
    });
  });

  describe('selectPunctumImageSource', () => {
    it('selects the correct values for the modal namespace', () => {
      const dummySrc = './dummy.jpg';
      const state = genTestState({ [namespace]: { src: dummySrc } });
      const data = selectWorkPunctumSource(state, { namespace });
      expect(data).toStrictEqual(dummySrc);
    });
    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = genTestState({ toast: { visible: true } });
      const data = selectWorkPunctumSource(state, { namespace });
      expect(data).toBeNull();
    });
  });

  describe('selectPunctumImageAltText', () => {
    it('selects the correct values for the modal namespace', () => {
      const dummyAltText = 'testText';
      const state = genTestState({ [namespace]: { alt: dummyAltText } });
      const data = selectWorkPunctumAltText(state, { namespace });
      expect(data).toStrictEqual(dummyAltText);
    });

    it('defaults the visibility to false if there is no key for the modal', () => {
      const state = genTestState({ toast: { visible: true } });
      const data = selectWorkPunctumAltText(state, { namespace });
      expect(data).toBeNull();
    });
  });
});
