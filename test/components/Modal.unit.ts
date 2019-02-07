import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/modal/Modal';

const MODAL_MARKUP = '<div><button type="button"><svg></svg></button></div>';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal Component', () => {
  it('renders', () => {
    const element = React.createElement(Modal, { visible: true });

    const modal = shallow(element);

    expect(modal.exists()).toBe(true);
    expect(modal.html()).toStrictEqual(MODAL_MARKUP);
  });

  it('renders with custom classes', () => {
    const className = 'basic modal';

    const element = React.createElement(Modal, {
      visible: true,
      className,
    });

    const modal = shallow(element);

    expect(modal.hasClass(className)).toBe(true);
  });

  it('renders internal div only when visible', () => {
    const shownElement = React.createElement(Modal, {
      visible: true,
      className: 'show',
    });

    const hiddenElement = React.createElement(Modal, {
      visible: false,
      className: 'hide',
    });

    const showedModal = shallow(shownElement);

    const hiddenModal = shallow(hiddenElement);

    expect(showedModal.hasClass('show')).toBe(true);
    expect(hiddenModal.hasClass('hide')).toBe(false);
  });
});
