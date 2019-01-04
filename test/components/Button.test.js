import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../../src/components/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders with class "button" & additional classes', () => {});

  it('handles being clicked', () => {});

  it('acts on its parent component when clicked', () => {});
});
