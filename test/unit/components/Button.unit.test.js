import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../../../src/components/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders', () => {
    const button = shallow(<Button />);
    expect(button.exists()).toBe(true);
  });

  it('renders with custom classes', () => {
    const classes = ['clickme', 'button'];
    const modal = shallow(<Button classes={classes} />);
    classes.forEach(c => expect(modal.hasClass(c)).toBe(true));
  });

  it('handles being clicked', () => {});

  it('acts on its parent component when clicked', () => {});
});
