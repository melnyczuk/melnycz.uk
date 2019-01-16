import React from 'react';
import { Provider } from 'react-redux'
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import Area from '../../../src/components/area/Area';

Enzyme.configure({ adapter: new Adapter() });

const dummyStore = { areas: { test: { works: [] } } };

describe('Area', () =>{

  const store = configureStore()({ ...dummyStore });

  afterEach(() => store.clearActions());

  it('renders', () => {
    const area = shallow(
      <Provider store={store}>
        <Area namespace={'test'} />
      </Provider>
    );

    expect(area.exists()).toBe(true);
    expect(mount(area.get(0)).length).toBe(1);
    expect(area.html()).toStrictEqual('<section></section>');
  });

  it('renders with custom classes', () => {
    const classes = ['image', 'entrypoint'];

    const area = shallow(
      <Provider store={store}>
        <Area namespace={'test'} classes={classes} />
      </Provider>
    );

    expect(area.html()).toStrictEqual(
      `<section class="${classes[0]} ${classes[1]}"></section>`
    );
  });

  describe('Background Media', () => {});

  describe('Interactive Media', () => {});

  describe('Modals', () => {});
});

