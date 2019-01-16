import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../../src/components/modal/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {

  const mockStore = configureStore();

  it('renders', () => {
    const store = mockStore({ test: { visible: true } });

    const modal = shallow(
      <Provider store={store}>
        <Modal namespace={'test'} />
      </Provider>
    );

    expect(modal.exists()).toBe(true);
    expect(mount(modal.get(0)).length).toBe(1);
    expect(modal.html()).toStrictEqual('<div></div>');
  });

  it('renders with custom classes', () => {
    const classes = ['basic', 'modal'];

    const store = mockStore({ test: { visible: true } });

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
    const showedStore = mockStore({ test: { visible: true } });
    const hiddenStore = mockStore({ test: { visible: false } });

    const showedModal = shallow(
      <Provider store={showedStore}>
        <Modal namespace={'test'} />
      </Provider>
    );

    const hiddenModal = shallow(
      <Provider store={hiddenStore}>
        <Modal namespace={'test'} />
      </Provider>
    );

    expect(showedModal.html()).toStrictEqual('<div></div>');
    expect(hiddenModal.html()).toStrictEqual('');
  });

});
