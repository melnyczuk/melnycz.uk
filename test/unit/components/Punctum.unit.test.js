import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Punctum from '../../../src/components/punctum/Punctum';

Enzyme.configure({ adapter: new Adapter() });

describe('Punctum', () => {

  const mockStore = configureStore();

  it('renders', () => {
    const store = mockStore({ 'test': { src: false, alt: false }});

    const punctum = shallow(
      <Provider store={store}>
        <Punctum namespace={'test'} />
      </Provider>
    );

    expect(punctum.exists()).toBe(true);
    expect(mount(punctum.get(0)).length).toBe(1);
    expect(punctum.html()).toStrictEqual('<div></div>');
  });

  it('renders with additional classes', () => {
    const classes = ['image', 'entrypoint'];
    const testNamespace = 'test';
    const store = mockStore({ [testNamespace]: { src: false }});

    const punctum = shallow(
      <Provider store={store}>
        <Punctum namespace={'test'} classes={classes} />
      </Provider>
    );

    expect(punctum.html()).toStrictEqual(
      `<div class="${classes[0]} ${classes[1]}"></div>`
    );
  });

  it('renders with an image', () => {
    const testNamespace = 'test';
    const dummySrc = './dummysrc.jpg'
    const altText = 'testImage';
    const store = mockStore({ [testNamespace]: { src: dummySrc, alt: altText }});

    const punctum = shallow(
      <Provider store={store}>
        <Punctum namespace={testNamespace} />
      </Provider>
    );

    expect(mount(punctum.get(0))
      .contains(
        <img src={dummySrc} alt={altText} />
      )
    ).toBe(true);
  });

});