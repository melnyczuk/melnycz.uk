import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/modal/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
  it('renders', () => {
    const modal = shallow(<Modal visible={true} />);

    expect(modal.exists()).toBe(true);
    expect(modal.length).toBe(1);
    expect(modal.html()).toStrictEqual('<div><button></button></div>');
  });

  it('renders with custom classes', () => {
    const classes = ['basic', 'modal'];

    const modal = shallow(<Modal visible={true} classes={classes} />);

    expect(modal.html()).toStrictEqual(
      `<div class="${classes[0]} ${classes[1]}"><button></button></div>`
    );
  });

  it('renders internal div only when visible', () => {
    const showedModal = shallow(<Modal visible={true} />);
    const hiddenModal = shallow(<Modal visible={false} />);

    expect(showedModal.html()).toStrictEqual('<div><button></button></div>');
    expect(hiddenModal.html()).toBeNull();
  });

});
