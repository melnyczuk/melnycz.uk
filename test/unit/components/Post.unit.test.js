import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../../../src/components/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('Post', () => {
  it('renders', () => {
    const store = configureStore()({});

    const post = shallow(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    expect(post.exists()).toBe(true);
    expect(mount(post.get(0)).length).toBe(1);
  });

  it('renders with additional classes', () => {
    const classes = ['basic', 'post'];
    const store = configureStore()({});

    const wrapper = shallow(
      <Provider store={store}>
        <Post classes={classes} />
      </Provider>
    );
    const post = mount(wrapper.get(0));

    classes.forEach(c => expect(post.exists(`.${c}`)).toBe(true));
    expect(post.html()).toStrictEqual('<div class="basic post"></div>');
  });

  it('renders with a title', () => {
    const namespace = 'testNameSpace';
    const store = configureStore()({ [namespace]: { title: 'testTitle' } });

    const post = shallow(
      <Provider store={store}>
        <Post namespace={namespace} />
      </Provider>
    );

    expect(post.html()).toStrictEqual('<div><h2>testTitle</h2></div>');
  });
});