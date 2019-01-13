import assert from 'assert';
import {
  selectPostTitle
} from '../../../src/store/post.store';

describe('Post Selectors', () => {
  describe('selectPostTitle', () => {
    it('selects the post title', () => {
      const expectedTitle = 'tester';
      const namespace = 'test';
      const state = { [namespace]: { title: expectedTitle } };
      const data = selectPostTitle(state, namespace);
      assert.strictEqual(data, expectedTitle);
    });
  });
});
