import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal, { DEFAULT_MODAL_CLASS } from '../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });

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

    // it('visibility changes when clicked', () => {
    //   const modal = shallow(<ModalContainer />);
    //   expect(modal.exists('.modal')).toBe(true);
    //   modal.find('.modal').simulate('click');
    //   expect(modal.exists('.modal')).toBe(false);
    // });


  it('shows the internal div when visibility changes', () => {});

  describe('Post Modal', () => { });

  describe('Video Modal', () => { });

  describe('Image Modal', () => {});
});
