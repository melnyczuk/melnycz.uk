import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Viewer, { DEFAULT_VIEWER_CLASS } from '../../src/components/Viewer';

Enzyme.configure({ adapter: new Adapter() });

describe('Viewer', () =>{
  it('renders', () => {
    const viewer = shallow(<Viewer />);
    expect(viewer.exists()).toBe(true);
  });

  it('renders with a className "viewer" & additional classes', () => {
    const classes = ['port'];
    const viewer = shallow(<Viewer classes={classes} />);
    expect(viewer.hasClass(DEFAULT_VIEWER_CLASS)).toBe(true);
    expect(viewer.hasClass(classes[0])).toBe(true);
  });

  describe('Background Media', () => {});

  describe('Interactive Media', () => {});

  describe('Modals', () => {});
});

