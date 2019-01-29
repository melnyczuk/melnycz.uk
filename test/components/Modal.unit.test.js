import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Modal } from '../../src/components/modal/Modal';

const MODAL_MARKUP = '<div><button><svg></svg></button></div>';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {

  const mockStore = configureStore();
  const store = mockStore({});


  it('renders', () => {
    const modal = shallow(
      <Provider store={store}>
        <Modal visible={true} />
      </Provider>
    );

    expect(modal.exists()).toBe(true);
    expect(mount(modal.get(0)).length).toBe(1);
    expect(modal.html()).toStrictEqual(MODAL_MARKUP);
  });

  it('renders with custom classes', () => {
    const className = 'basic modal';

    const modal = shallow(
        <Modal className={className} visible={true} />
    );

    expect(modal.hasClass(className)).toBe(true);
  });

  it('renders internal div only when visible', () => {
    const showedModal = shallow(
      <Provider store={store}>
        <Modal visible={true} />
      </Provider> 
    );

    const hiddenModal = shallow(
      <Provider store={store}>
        <Modal visible={false} />
      </Provider>
    );

    expect(showedModal.html()).toStrictEqual(MODAL_MARKUP);
    expect(hiddenModal.html()).toStrictEqual('');
  });

});
