import assert from 'assert';
import selectors from '../../../src/store/selectors';

describe('Selectors', () => {

  describe('Modal Selectors', () => {

    const {
      selectModalVisibility
    } = selectors.modal;

    describe('selectModalVisibility', () => {
      it('selects the correct values for the modal namespace', () => {
        const namespace = 'testModal';
        const state = { [namespace]: { visible: true } }
        const data = selectModalVisibility(state, 'testModal');
        assert.strictEqual(data, true);
      });

      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = { visible: true };
        const data = selectModalVisibility(state);
        assert.strictEqual(data, false);
      });
    });
  });

  describe('Post Selectors', () => {

    const {
      selectPostTitle
    } = selectors.post;

    describe('selectPostTitle', () => {
      it('selects the post title', () => {
        const expectedTitle = 'tester';
        const namespace = 'test';
        const state = { [namespace]: { title: expectedTitle } };
        const data = selectPostTitle(state, namespace);
        assert.strictEqual(data, expectedTitle);
      });

      it('returns null if the namespace is not in the store', () => {
        const state = { test: { title: 'tester' } };
        const data = selectPostTitle(state, 'toast');
        assert.strictEqual(data, null);
      });
    });
  });

  describe('Punctum Selectors', () => {

    const {
      selectPunctumImageSource,
      selectPunctumImageAltText
    } = selectors.punctum;

    describe('selectPunctumImageSource', () => {
      it('selects the correct values for the modal namespace', () => {
        const namespace = 'testModal';
        const dummySrc = './dummy.jpg';
        const state = { [namespace]: { src: dummySrc } }
        const data = selectPunctumImageSource(state, 'testModal');
        assert.strictEqual(data, dummySrc);
      });
      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = { visible: true };
        const data = selectPunctumImageSource(state);
        assert.strictEqual(data, null);
      });
    });

    describe('selectPunctumImageAltText', () => {
      it('selects the correct values for the modal namespace', () => {
        const namespace = 'testModal';
        const dummyAltText = 'testText';
        const state = { [namespace]: { alt: dummyAltText } };
        const data = selectPunctumImageAltText(state, 'testModal');
        assert.strictEqual(data, dummyAltText);
      });

      it('defaults the visibility to false if there is no key for the modal', () => {
        const state = { visible: true };
        const data = selectPunctumImageAltText(state);
        assert.strictEqual(data, null);
      });
    });
  });
});
