import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../../src/components/button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button, component', () => {
  it('renders', () => {
    const element = React.createElement(Button);
    const button = shallow(element);
    expect(button.exists()).toBe(true);
  });

  it('renders with custom classes', () => {
    const element = React.createElement(Button, {
      visible: true,
      className: 'clickme button',
    });
    const button = shallow(element);
    expect(button.html()).toStrictEqual(
      '<button type="button" class="clickme button"><svg></svg></button>',
    );
  });

  it('handles being clicked', () => { });

  it('acts on its parent component when clicked', () => { });
});
