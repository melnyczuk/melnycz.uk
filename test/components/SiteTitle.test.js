import React from 'react';
import { shallow } from 'enzyme';

import SiteTitle from '../../components/SiteTitle';

describe('SiteTitle', () => {
  const title = shallow(<SiteTitle title='test' />);

  describe('Link', () => {
    it('is a Next link component', () => {
      expect(title.name('Link')).toBeTruthy();
    });

    it('has a href attribute that links back to the root path', () => {
      expect(title.prop('href')).toEqual('/');
    });
  });

  describe('h1 tag', () => {
    const h1 = title.find('h1');

    it('has a single h1 element', () => {
      expect(h1).toHaveLength(1);
    });
    
    it('has a h1 tag with the correct text', () => {
      expect(h1.text()).toEqual('test');
    });

    it('has a class of .site-title', () => {
      expect(h1.hasClass('site-title')).toBeTruthy();
    });
  });
});