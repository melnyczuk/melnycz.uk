import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Area } from '../../src/areas/Area';
import { PortfolioType } from '../../src/types';

Enzyme.configure({ adapter: new Adapter() });

describe('Areas', () => {

  describe('Portfolio', () => {

    it('renders', () => {

      const mockWorks: PortfolioType = {
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

      const portfolio = shallow(
        <Area
          area={'test'}
          title={'Test'}
          component={null}
          updateTitle={() => { }} />
      );

      expect(portfolio.exists()).toBe(true);
      expect(portfolio.length).toBe(1);
      expect(portfolio.is('main')).toBe(true);
      expect(portfolio.hasClass('main')).toBe(true);
      expect(portfolio.hasClass('portfolio')).toBe(true);

    });

  });

});
