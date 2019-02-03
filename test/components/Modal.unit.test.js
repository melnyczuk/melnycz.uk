import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/modal/Modal';

const MODAL_MARKUP = '<div><button><svg></svg></button></div>';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal Component', () => {
  it('renders', () => {
    const modal = shallow(
      <Modal visible />,
    );

    expect(modal.exists()).toBe(true);
    expect(modal.html()).toStrictEqual(MODAL_MARKUP);
  });

  it('renders with custom classes', () => {
    const className = 'basic modal';

    const modal = shallow(
      <Modal className={className} visible />,
    );

    expect(modal.hasClass(className)).toBe(true);
  });

  it('renders internal div only when visible', () => {
    const showedModal = shallow(
      <Modal visible className="show" />,
    );

    const hiddenModal = shallow(
      <Modal visible={false} className="hide" />,
    );

    expect(showedModal.hasClass('show')).toBe(true);
    expect(hiddenModal.hasClass('hide')).toBe(false);
  });
});
