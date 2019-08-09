import React from 'react';
import { shallow } from 'enzyme';

import SiteTitle from '../../components/SiteTitle';

describe('SiteTitle', () => {
  it('has a h1 tag', () => {
    const title = shallow(<SiteTitle title='test' />);
    const h1 = title.find('h1');
    expect(h1).toHaveLength(1);
    expect(h1.text()).toEqual('test');
  });
});