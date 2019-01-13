import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Viewer from '../../../src/components/Viewer';

Enzyme.configure({ adapter: new Adapter() });

describe('Viewer', () =>{
  it('renders', () => {
    const viewer = shallow(<Viewer />);
    expect(viewer.exists()).toBe(true);
  });

  it('renders with a className "viewer" & additional classes', () => {
    const classes = ['port', 'viewer'];
    const viewer = shallow(<Viewer classes={classes} />);
    classes.forEach(c => expect(viewer.hasClass(c)).toBe(true));
  });

  describe('Background Media', () => {});

  describe('Interactive Media', () => {});

  describe('Modals', () => {});
});
