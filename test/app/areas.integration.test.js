import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PrimaryArea } from '../../src/app/areas/Areas';

Enzyme.configure({ adapter: new Adapter() });

describe('Area', () => {

  describe('Primary Area', () => {

    it('renders', () => {
      const area = shallow(<PrimaryArea />);

      expect(area.exists()).toBe(true);
      expect(area.length).toBe(1);
      expect(area.hasClass('main')).toBe(true);
      expect(area.hasClass('primary')).toBe(true);
      expect(area.html()).toStrictEqual(
        '<main class="main primary"></main>'
      );
    });

    describe('Background Media', () => { });

    describe('Interactive Media', () => { });

    describe('Modals', () => { });
  });
});

