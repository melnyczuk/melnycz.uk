import React from 'react';
import { Provider } from 'react-redux'
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import Viewer from '../../src/components/viewer/Viewer';

Enzyme.configure({ adapter: new Adapter() });

const dummyStore = { '0': { viewers: { test: { elements: [] } } } }

describe('Viewer', () =>{

  const store = configureStore()({ ...dummyStore });

  afterEach(() => store.clearActions());

  it('renders', () => {
    const viewer = shallow(
      <Provider store={store}>
        <Viewer namespace={'test'} />
      </Provider>
    );

    expect(viewer.exists()).toBe(true);
    expect(mount(viewer.get(0)).length).toBe(1);
    expect(viewer.html()).toStrictEqual('<div></div>');
  });

  it('renders with custom classes', () => {
    const classes = ['image', 'entrypoint'];

    const viewer = shallow(
      <Provider store={store}>
        <Viewer namespace={'test'} classes={classes} />
      </Provider>
    );

    expect(viewer.html()).toStrictEqual(
      `<div class="${classes[0]} ${classes[1]}"></div>`
    );
  });

  describe('Background Media', () => {});

  describe('Interactive Media', () => {});

  describe('Modals', () => {});
});

