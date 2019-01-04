import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from '../../../src/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Nav', () => {
  it('renders', () => {
    const navBar = shallow(<NavBar />);
    expect(navBar.exists()).toBe(true);
  });

  it('renders with class "nav-bar" & additional classes', () => {
    const classes = ['navigation'];
    const navBar = shallow(<NavBar classes={classes} />);
    classes.forEach(c => expect(navBar.hasClass(c)).toBe(true));
  });

  it('renders an id', () => {
    const id = 'howard-melnyczuk';
    const navBar = shallow(<NavBar id={id} />);
    expect(!!navBar.find(`#${id}`)).toBe(true);
  });

  it('renders a title', () => {
    const title = 'howard-melnyczuk';
    const navTitle = shallow(<NavBar title={title} />).find(`#${title}`);
    expect(navTitle.exists()).toBe(true);
  });

  it('renders with buttons with id and relative href', () => {
    const buttons = [ 'art', 'coding' ];
    const navButtons = shallow(<NavBar buttons={buttons} />).find('.nav-button');

    expect(navButtons).toHaveLength(2);

    buttons.forEach(button => {
      expect(navButtons.find(`#${button}`)).toHaveLength(1);
      expect(navButtons.find(`[href="${button}"]`)).toHaveLength(1);
    });
  });
});
