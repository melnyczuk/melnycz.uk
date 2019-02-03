import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../../src/components/button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button, component', () => {
  it('renders', () => {
    const button = shallow(<Button />);
    expect(button.exists()).toBe(true);
  });

  it('renders with custom classes', () => {
    const button = shallow(<Button visible className="clickme button" />);
    expect(button.html()).toStrictEqual(
      '<button class="clickme button"><svg></svg></button>',
    );
  });

  it('handles being clicked', () => { });

  it('acts on its parent component when clicked', () => { });
});
