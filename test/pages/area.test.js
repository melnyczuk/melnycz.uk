import React from 'react';
import { shallow } from 'enzyme';

import * as nextRouter from 'next/router';
import AreaPage from '../../pages/[area].tsx';

import { sitetitle } from '../../static/db/info.json';

describe('About Page', () => {
  nextRouter.useRouter = jest.fn()
    .mockImplementation(() => ({ query: { area: 'test' }}));

  const page = shallow(<AreaPage />);

  it('renders a site title', () => {
    const title = page.render().find('h1');
    expect(title).toHaveLength(1);
    expect(title.hasClass('site-title')).toBeTruthy();
    expect(title.text()).toEqual(sitetitle);
  });

  it('renders a nav', () => {
    const nav = page.render().find('nav');
    expect(nav).toHaveLength(1);
    expect(nav.hasClass('nav')).toBeTruthy();
  });
});