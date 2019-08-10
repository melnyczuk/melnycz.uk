import React from 'react';
import { mount } from 'enzyme';

import Index from '../../pages/index.tsx';

import { sitetitle } from '../../static/db/info.json';

describe('Index', () => {
  const page = mount(<Index/>);

  it('renders a site title', () => {
    const title = page.find('.site-title');
    expect(title).toHaveLength(1);
    expect(title.text()).toEqual(sitetitle);
  });

  it('renders a nav', () => {
    const nav = page.find('.nav');
    expect(nav).toHaveLength(1);
  });

  it('renders a picture', () => {
    const pic = page.find('.picture');
    expect(pic).toHaveLength(1);
  });
});