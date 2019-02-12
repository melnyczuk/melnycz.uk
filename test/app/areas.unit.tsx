import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Portfolio } from '../../src/app/areas/portfolio';
import { WorksType } from '../../src/store/types';

Enzyme.configure({ adapter: new Adapter() });

describe('Areas', () => {

  describe('Portfolio', () => {

    it('renders', () => {

      const mockWorks: WorksType = {
        test: {
          visible: null,
          description: null,
          namespace: null,
          img: null,
          live: null,
          media: null,
          year: null,
          title: null,
          materials: null,
          type: null,
        }
      }

      const portfolio = shallow(<Portfolio works={mockWorks} />);

      expect(portfolio.exists()).toBe(true);
      expect(portfolio.length).toBe(1);
      expect(portfolio.is('main')).toBe(true);
      expect(portfolio.hasClass('main')).toBe(true);
      expect(portfolio.hasClass('portfolio')).toBe(true);

    });

  });

});
