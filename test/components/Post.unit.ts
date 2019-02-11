import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Post, PostProps } from '../../src/components/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('Post Component', () => {
  it('renders', () => {
    const element = React.createElement(Post);
    const post = shallow(element);

    expect(post.exists()).toBe(true);
    expect(post.length).toBe(1);
    expect(post.html()).toStrictEqual('<article></article>');
  });

  it('renders with additional className', () => {
    const props: PostProps = {
      className:  'basic post',
      namespace: null,
      title: null,
      expand: null,
      expanded: null,
      short: null,
    }

    const element = React.createElement(Post, props);

    const post = shallow(element);

    expect(post.html()).toStrictEqual(
      `<article class="${props.className}"></article>`,
    );
  });

  it('renders with a title', () => {
    const title = 'testTitle';
    const element = React.createElement(Post, { title });
    const post = shallow(element);

    const header = React.createElement('h2', {}, title);
    expect(post.contains(header)).toBe(true);
    expect(post.html()).toStrictEqual(`<article><h2>${title}</h2></article>`);
  });
});
