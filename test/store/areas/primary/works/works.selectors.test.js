import initialState from '../../../src/store/initialStore';
import selectors from '../../../src/store/selectors';

describe('Selectors', () => {

  const state = initialState;

  describe('Modal Selectors', () => {

    const {
      getModalVisibility
    } = selectors.modal;

    describe('getModalVisibility', () => {
      it('selects the correct values for the modal namespace', () => {
        const namespace = 'testModal';
        const state = { [namespace]: { visible: true } }
        const data = getModalVisibility(state, 'testModal');
        expect(data).toBe(true);
      });

      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = { visible: true };
        const data = getModalVisibility(state);
        expect(data).toBe(false);
      });
    });
  });

  describe('Post Selectors', () => {

    const {
      getPostTitle
    } = selectors.post;

    describe('getPostTitle', () => {
      it('selects the post title', () => {
        const expectedTitle = 'tester';
        const namespace = 'test';
        const state = { [namespace]: { title: expectedTitle } };
        const data = getPostTitle(state, namespace);
        expect(data).toStrictEqual(expectedTitle);
      });

      it('returns null if the namespace is not in the store', () => {
        const state = { test: { title: 'tester' } };
        const data = getPostTitle(state, 'toast');
        expect(data).toBeNull();
      });
    });
  });

  describe('Punctum Selectors', () => {

    const {
      getPunctumImageSource,
      getPunctumImageAltText
    } = selectors.punctum;

    describe('getPunctumImageSource', () => {
      it('selects the correct values for the modal namespace', () => {
        const namespace = 'testModal';
        const dummySrc = './dummy.jpg';
        const state = { [namespace]: { src: dummySrc } }
        const data = getPunctumImageSource(state, 'testModal');
        expect(data).toStrictEqual(dummySrc);
      });
      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = { visible: true };
        const data = getPunctumImageSource(state);
        expect(data).toBeNull();
      });
    });

    describe('getPunctumImageAltText', () => {
      it('selects the correct values for the modal namespace', () => {
        const namespace = 'testModal';
        const dummyAltText = 'testText';
        const state = { [namespace]: { alt: dummyAltText } };
        const data = getPunctumImageAltText(state, 'testModal');
        expect(data).toStrictEqual(dummyAltText);
      });

      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = { visible: true };
        const data = getPunctumImageAltText(state);
        expect(data).toBeNull();
      });
    });
  });
});
