import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PrimaryArea } from '../../src/app/areas/primary/Primary.area';

Enzyme.configure({ adapter: new Adapter() });


describe('Area', () => {

  describe('Primary Area', () => {

    it('renders', () => {
      const area = shallow(<PrimaryArea namespace={'test'} />);

      expect(area.exists()).toBe(true);
      expect(area.find(PrimaryArea).length).toBe(1);
      expect(area.html()).toStrictEqual('<main></main>');
    });

    it('renders with custom classes', () => {
      const className = 'image entrypoint';

      const area = shallow(
        <PrimaryArea namespace={'test'} className={className} />
      );

      expect(area.html()).toStrictEqual(
        `<main class="${className}"></main>`
      );
    });

    describe('Background Media', () => { });

    describe('Interactive Media', () => { });

    describe('Modals', () => { });
  });
});

