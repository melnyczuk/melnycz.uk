import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store' //ES6 modules
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Modal } from '../../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('Modals', () => {
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

});
