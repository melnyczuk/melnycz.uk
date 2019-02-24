import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Post, PostProps } from '../../src/components/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('Post Component', () => {
  const nullProps: PostProps = {
    className: null,
    namespace: null,
    title: null,
    short: null,
    long: null,
    setLong: () => {},
  };

  it('renders', () => {
    const element = React.createElement(Post);
    const post = shallow(element);

    expect(post.exists()).toBe(true);
    expect(post.length).toBe(1);
    expect(post.html()).toStrictEqual('<article></article>');
  });

  it('renders with additional className', () => {
    const props: PostProps = { ...nullProps, className: 'basic post' }

    const element = React.createElement(Post, props);

    const post = shallow(element);

    expect(post.html()).toStrictEqual(
      `<article class="${props.className}"></article>`,
    );
  });

  it('renders with a title', () => {
    const props: PostProps = { ...nullProps, title: 'testTitle' }

    const element = React.createElement(Post, props);
    const post = shallow(element);

    const header = React.createElement('h2', {}, props.title);
    expect(post.contains(header)).toBe(true);
    expect(post.html()).toStrictEqual(
      `<article><h2>${props.title}</h2></article>`
    );
  });
});
