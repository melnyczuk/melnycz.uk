import React from 'react';
import { shallow } from 'enzyme';

import SiteTitle from '../../components/SiteTitle';

describe('SiteTitle', () => {
  const title = shallow(<SiteTitle title='test' />);

  it('has a h1 tag', () => {
    const h1Tag = title.find('h1');
    expect(h1Tag).toHaveLength(1);
    expect(h1Tag.text()).toEqual('test');
  });

  it('has a class of .site-title', () => {
    const c = title.find('.site-title');
    expect(c).toHaveLength(1);
  });
});