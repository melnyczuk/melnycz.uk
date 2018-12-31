import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('Modals', () => {

  describe('Base Modal', () => {
    it.only('renders with class "modal" & additional classes', () => {
      const classes = ['basic'];
      const navBar = shallow(<Modal classes={classes} />);
      expect(navBar.hasClass('modal')).toBe(true);
      expect(navBar.hasClass(classes[0])).toBe(true);
    });
  });

  describe('Post Modal', () => { });

  describe('Video Modal', () => { });

  describe('Image Modal', () => { });

});