import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Portfolio from '../../src/app/areas/portfolio';

Enzyme.configure({ adapter: new Adapter() });

describe('Areas', () => {

  describe('Primary Area', () => {

    it('renders', () => {

      const primary: any = shallow(<Portfolio />);

      expect(primary.exists()).toBe(true);
      expect(primary.length).toBe(1);
      expect(primary.hasClass('main')).toBe(true);
      expect(primary.hasClass('primary')).toBe(true);
      expect(primary.html()).toStrictEqual(
        '<main class="main primary"></main>',
      );

    });

  });

});
