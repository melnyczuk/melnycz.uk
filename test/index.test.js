import React from 'react';
import jest from 'jest';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Index from '../pages/index.tsx';

configure({ adapter: new Adapter() });

describe('Index', () => {
  it('renders', () => {
    console.log('bababababa', Index);
    const i = shallow(React.createElement(Index));
    expect(i).toMatchSnapshot(`<div>'hello world'</div>`);
  });
});