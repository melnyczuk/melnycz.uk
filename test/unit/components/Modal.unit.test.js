import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store' //ES6 modules
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ConnectedModal, { Modal } from '../../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
  it('renders', () => {
    const modal = shallow(<Modal />);
    expect(modal.exists()).toBe(true);
    expect(modal.length).toBe(1);
  });

  it('renders with additional classes', () => {
    const classes = ['basic', 'modal'];
    const modal = shallow(<Modal classes={classes} visible={true} />);
    classes.forEach(c => expect(modal.hasClass(c)).toBe(true));
  });

  it('renders internal div only when visible', () => {
    const shownModal = shallow(<Modal classes={['shown']} visible={true} />);
    const hiddenModal = shallow(<Modal classes={['hidden']} visible={false} />);
    expect(shownModal.exists('.shown')).toBe(true);
    expect(hiddenModal.exists('.hidden')).toBe(false);
  });

  describe('Modal Container', () => {
    it('renders the connected modal container and gets props from store', () => {
      const store = configureStore()({ visible: true, classes: ['test'], children: [] });
      const modalContainer = shallow(
        <Provider store={store}>
          <ConnectedModal />
        </Provider>
      );
      expect(modalContainer.exists()).toBe(true);
      expect(mount(modalContainer.get(0)).find('.test')).toHaveLength(1);
    });
  });

});
