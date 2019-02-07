import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Portal from '../../src/components/portal/Portal';

Enzyme.configure({ adapter: new Adapter() });

describe('Portal Component', () => {
  it('renders', () => {
    const post = shallow(React.createElement(Portal));

    expect(post.exists()).toBe(true);
    expect(post.length).toBe(1);
    expect(post.html()).toStrictEqual('<figure></figure>');
  });

  it.skip('renders with additional className', () => {
    const className = 'basic post';

    const post = shallow(React.createElement(Portal), { className });

    expect(post.html()).toStrictEqual(
      '<figure></figure>',
    );
  });
});
