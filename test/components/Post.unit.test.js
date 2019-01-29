import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Post } from '../../src/components/post/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('Post', () => {
  it('renders', () => {
    const post = shallow(<Post />);

    expect(post.exists()).toBe(true);
    expect(post.length).toBe(1);
    expect(post.html()).toStrictEqual('<article></article>');
  });

  it('renders with additional className', () => {
    const className = 'basic post';

    const post = shallow(<Post className={className} />);

    expect(post.html()).toStrictEqual(
      `<article class="${className}"></article>`
    );
    
  });

  it('renders with a title', () => {
    const testTitle = 'testTitle';

    const post = shallow(<Post title={testTitle} />);

    expect(post.contains(<h2>{testTitle}</h2>)).toBe(true);
    expect(post.html()).toStrictEqual(`<article><h2>${testTitle}</h2></article>`);
  });
});
