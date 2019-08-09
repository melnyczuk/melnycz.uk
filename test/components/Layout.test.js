import React from 'react';
import { mount } from 'enzyme';

import Layout from '../../components/Layout';

describe('Layout', () => {
  const component = mount(<Layout />);

  it('has a SiteTitle component', () => {
    const title = component.find('.site-title'); 
    expect(title).toHaveLength(1);
  });

  it('has a Nav component', () => {
    const nav = component.find('.nav');
    expect(nav).toHaveLength(1);
  });
});