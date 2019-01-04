import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });

const DEFAULT_MODAL_CLASS = 'modal';

describe('Modals', () => {
  it('renders', () => {
    const modal = shallow(<Modal />);
    expect(modal.exists()).toBe(true);
  });

  it('renders with class "modal" & additional classes', () => {
    const classes = ['basic'];
    const modal = shallow(<Modal classes={classes} visible={true} />);
    expect(modal.hasClass(DEFAULT_MODAL_CLASS)).toBe(true);
    expect(modal.hasClass(classes[0])).toBe(true);
  });

  it('renders internal div only when visible', () => {
    const shownModal = shallow(<Modal classes={['shown']} visible={true} />);
    const hiddenModal = shallow(<Modal classes={['hidden']} visible={false} />);

    expect(shownModal.exists('.shown')).toBe(true);
    expect(hiddenModal.exists('.hidden')).toBe(false);
  });

  it.skip('visibility changes when clicked', () => {
    const modalSelector = `.${DEFAULT_MODAL_CLASS}`;
    const modal = shallow(<Modal />);
    expect(modal.exists(modalSelector)).toBe(true);
    modal.find(modalSelector).simulate('click');
    expect(modal.exists(modalSelector)).toBe(false);
  });

  it.skip('shows the internal div when visibility changes', () => { });
});
