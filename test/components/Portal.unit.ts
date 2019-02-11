import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Portal, PortalProps } from '../../src/components/Portal';

Enzyme.configure({ adapter: new Adapter() });

describe('Portal Component', () => {
  it('renders', () => {
    const post = shallow(React.createElement(Portal));

    expect(post.exists()).toBe(true);
    expect(post.length).toBe(1);
    expect(post.html()).toStrictEqual('<figure></figure>');
  });

  it.skip('renders with additional className', () => {
    const props: PortalProps = {
      className: 'basic post',
      namespace: null,
      images: null,
      scrollPortal: null,
      baseBinUrl: null,
    };

    const post = shallow(React.createElement(Portal, props));

    expect(post.html()).toStrictEqual(
      '<figure></figure>',
    );
  });
});
