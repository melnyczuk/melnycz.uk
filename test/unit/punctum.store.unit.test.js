import assert from 'assert';
import punctum from '../../../src/store/punctum.store';

const { selectPunctumImageSource, selectPunctumImageAltText } = punctum.selectors;

describe('Punctum Store Functionality', () => {

  describe('Punctum Selectors', () => {
  
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