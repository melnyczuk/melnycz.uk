import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../../src/components/post/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('Post', () => {

  const mockStore = configureStore();

  it('renders', () => {
    const store = mockStore({});

    const post = shallow(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    expect(post.exists()).toBe(true);
    expect(mount(post.get(0)).length).toBe(1);
    expect(post.html()).toStrictEqual('<div></div>');
  });

  it('renders with additional classes', () => {
    const classes = ['basic', 'post'];

    const store = mockStore({});

    const post = shallow(
      <Provider store={store}>
        <Post classes={classes} />
      </Provider>
    );
    
    expect(post.html()).toStrictEqual(
      `<div class="${classes[0]} ${classes[1]}"></div>`
    );
  });

  it('renders with a title', () => {
    const namespace = 'testNameSpace';
    const testTitle = 'testTitle';
    
    const store = mockStore({ [namespace]: { title: testTitle } });

    const post = shallow(
      <Provider store={store}>
        <Post namespace={namespace} />
      </Provider>
    );

    expect(mount(post.get(0)).contains(<h2>{testTitle}</h2>)).toBe(true);
    expect(post.html()).toStrictEqual(`<div><h2>${testTitle}</h2></div>`);
  });
});