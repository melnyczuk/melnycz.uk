import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('Modals', () => {
  it('renders', () => {
    const modal = shallow(<Modal />);
    expect(modal.exists()).toBe(true);
  });

  it('renders with class "modal" & additional classes', () => {
    const classes = ['basic'];
    const modal = shallow(<Modal classes={classes} />);
    expect(modal.hasClass('modal')).toBe(true);
    expect(modal.hasClass(classes[0])).toBe(true);
  });

  it('renders internal div only when visible', () => {
    const shownModal = shallow(<Modal classes={['shown']} visible={true} />);
    const hiddenModal = shallow(<Modal classes={['hidden']} visible={false} />);

    expect(shownModal.exists('.shown')).toBe(true);
    expect(hiddenModal.exists('.hidden')).toBe(false);
  });

  it.only('visibility changes when hidden', () => {
    const modal = shallow(<Modal classes={['div']} visible={true} />);
    expect(modal.exists('.div')).toBe(true);
    modal.find('div').simulate('hide');
    expect(modal.exists('.div')).toBe(false);
  });

  it.only('shows the internal div when visibility changes', () => {});

  describe('Post Modal', () => { });

  describe('Video Modal', () => { });

  describe('Image Modal', () => {});
});
