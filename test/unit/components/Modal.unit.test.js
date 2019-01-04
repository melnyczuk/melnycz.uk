import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });
describe('Modals', () => {
  it('renders', () => {
    const modal = shallow(<Modal />);
    expect(modal.exists()).toBe(true);
  });

  it('renders with class "modal" & additional classes', () => {
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

  it.skip('visibility changes when clicked', () => {
    const modal = shallow(<Modal />);
    expect(!!modal.exists(Modal)).toBe(true);
    modal.find(Modal).simulate('click');
    expect(!!modal.find(Modal)).toBe(false);
  });

  it.skip('shows the internal div when visibility changes', () => { });
});
