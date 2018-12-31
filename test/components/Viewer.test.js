import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Viewer from '../../src/components/Viewer';

Enzyme.configure({ adapter: new Adapter() });

describe('Viewer', () =>{
  it('renders with a className "viewer" & additional classes', () => {
    const classes = ['port'];
    const viewer = shallow(<Viewer classes={classes} />);
    expect(viewer.hasClass('viewer')).toBe(true);
    expect(viewer.hasClass(classes[0])).toBe(true);
  });

  describe('Background Media', () => {});

  describe('Interactive Media', () => {});

  describe('Modals', () => {
    it.only('renders a viewer with a modal if a modal is present', () => {
      const classes = ['port'];
      const viewer = shallow(<Viewer classes={classes} />);
    });
  });
});

