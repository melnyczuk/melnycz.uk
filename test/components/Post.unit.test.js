import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../../src/components/post/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('Post', () => {

  it('renders', () => {
    const post = shallow(<Post />);

    expect(post.exists()).toBe(true);
    expect(post.length).toBe(1);
    expect(post.html()).toStrictEqual('<section></section>');
  });

  it('renders with additional classes', () => {
    const classes = ['basic', 'post'];

    const post = shallow(<Post classes={classes} />);

    expect(post.html()).toStrictEqual(
      `<section class="${classes[0]} ${classes[1]}"></section>`
    );
  });

  it('renders with a title', () => {
    const testTitle = 'testTitle';

    const post = shallow(<Post title={testTitle} />);

    expect(post.contains(<h2>{testTitle}</h2>)).toBe(true);
    expect(post.html()).toStrictEqual(`<section><h2>${testTitle}</h2></section>`);
  });
});
