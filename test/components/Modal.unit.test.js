import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/modal/Modal';

const MODAL_MARKUP = '<div><button><svg></svg></button></div>';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {

  it('renders', () => {
    const modal = shallow(
        <Modal visible={true} />
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
        <Modal visible={true} />
    );

    const hiddenModal = shallow(
        <Modal visible={false} />
    );

    expect(showedModal.html()).toStrictEqual(MODAL_MARKUP);
    expect(hiddenModal.html()).toStrictEqual('');
  });

});