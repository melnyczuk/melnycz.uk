import React from 'react';
import { mount } from 'enzyme';

import About from '../../pages/about.tsx';

import { sitetitle } from '../../static/db/info.json';

describe('About Page', () => {
  const page = mount(<About/>);

  it('renders a site title', () => {
    const title = page.find('.site-title');
    expect(title).toHaveLength(1);
    expect(title.text()).toEqual(sitetitle);
  });

  it('renders a nav', () => {
    const nav = page.find('.nav');
    expect(nav).toHaveLength(1);
  });

  it('renders a punctum', () => {
    const pic = page.find('.punctum');
    expect(pic).toHaveLength(1);
  });
});