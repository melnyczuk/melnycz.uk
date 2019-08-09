import React from 'react';
import { mount } from 'enzyme';

import Index from '../../pages/index.tsx';

import { sitetitle } from '../../db/nav.json';

describe('Index', () => {
  it('renders a site title', () => {
    const page = mount(<Index/>);
    const title = page.find('.site-title');
    expect(title).toHaveLength(1);
    expect(title.text()).toEqual(sitetitle);
  });

  it('renders a nav', () => {
    const page = mount(<Index/>);
    const nav = page.find('.nav');
    expect(nav).toHaveLength(1);
  });

  it('renders a picture', () => {
    const page = mount(<Index/>);
    const pic = page.find('.picture');
    expect(pic).toHaveLength(1);
  });
});