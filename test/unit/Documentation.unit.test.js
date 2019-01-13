import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../../../src/components/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('Documentation', () => {
  it('renders', () => {
    const doc = shallow(<Post />);
    expect(doc.exists()).toBe(true);
  })
})
