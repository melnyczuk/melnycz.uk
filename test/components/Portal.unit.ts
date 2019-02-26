import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Portal, PortalProps } from '../../src/components/Portal';

Enzyme.configure({ adapter: new Adapter() });

describe('Portal Component', () => {
  
  const nullProps: PortalProps = {
    className: null,
    namespace: null,
    images: null,
    scrollPortal: () => {},
    baseBinUrl: null,
  };

  const postMarkup = '<figure><button type="button"><svg></svg></button><button type="button"><svg></svg></button></figure>'

  it('renders', () => {
    const post = shallow(React.createElement(Portal, nullProps));

    expect(post.exists()).toBe(true);
    expect(post.length).toBe(1);
    expect(post.html()).toStrictEqual(postMarkup);
  });
});
