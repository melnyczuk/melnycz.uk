import React from 'react';
import { Provider } from 'react-redux'
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import PrimaryArea from '../../src/app/areas/primary/Primary.area';

Enzyme.configure({ adapter: new Adapter() });


describe('Area', () => {

  describe('Primary Area', () => {
    const dummyStore = { areas: { primary: { works: [] } } };
    const store = configureStore()({ ...dummyStore });
    afterEach(() => store.clearActions());

    it('renders', () => {
      const area = shallow(
        <Provider store={store}>
          <PrimaryArea namespace={'test'} />
        </Provider>
      );

      expect(area.exists()).toBe(true);
      expect(mount(area.get(0)).length).toBe(1);
      expect(area.html()).toStrictEqual('<main></main>');
    });

    it('renders with custom classes', () => {
      const classes = ['image', 'entrypoint'];

      const area = shallow(
        <Provider store={store}>
          <PrimaryArea namespace={'test'} classes={classes} />
        </Provider>
      );

      expect(area.html()).toStrictEqual(
        `<main class="${classes[0]} ${classes[1]}"></main>`
      );
    });

    describe('Background Media', () => { });

    describe('Interactive Media', () => { });

    describe('Modals', () => { });
  });
});

