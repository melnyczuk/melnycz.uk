import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
  it('renders', () => {
    const store = configureStore()({ test: { visible: false } });
    
    const modal = shallow(
      <Provider store={store}>
        <Modal namespace={'test'} />
      </Provider>
    );

    expect(modal.exists()).toBe(true);
    expect(mount(modal.get(0)).length).toBe(1);
  });

  it('renders with custom classes', () => {
    const classes = ['basic', 'modal'];
    const store = configureStore()({ test: { visible: true } });
    
    const modal = shallow(
      <Provider store={store}>
        <Modal namespace={'test'} classes={classes} />
      </Provider>
    );

    expect(modal.html()).toStrictEqual(
      `<div class="${classes[0]} ${classes[1]}"></div>`
    );
  });

  it('renders internal div only when visible', () => {
    const shownModal = shallow(
      <Provider store={configureStore()({ test: { visible: true } })}>
        <Modal namespace={'test'} />
      </Provider>
    );

    const hiddenModal = shallow(
      <Provider store={configureStore()({ test: { visible: false } })}>
        <Modal namespace={'test'} />
      </Provider>
    );
    
    expect(shownModal.html()).toStrictEqual('<div></div>');
    expect(hiddenModal.html()).toStrictEqual('');
  });

});
