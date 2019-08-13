import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/components/App';

describe('Layout', () => {
  const app = mount(<App />);

  it('has a header tag with a classname of header', () => {
    const header = app.find('header');
    expect(header).toHaveLength(1);
    expect(header.hasClass('header')).toBeTruthy();
  })

  it('has a SiteTitle component', () => {
    const title = app.find('h1'); 
    expect(title).toHaveLength(1);
    expect(title.hasClass('site-title')).toBeTruthy();
  });

  it('has a Nav component', () => {
    const nav = app.find('.nav');
    expect(nav).toHaveLength(1);
  });
});