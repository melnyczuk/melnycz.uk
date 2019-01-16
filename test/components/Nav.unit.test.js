import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from '../../../src/components/nav/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Nav', () => {
  it('renders', () => {
    const navBar = shallow(<NavBar />);
    expect(navBar.exists()).toBe(true);
  });

  it('renders with custom classes', () => {
    const classes = ['navigation', 'bar'];
    const navBar = shallow(<NavBar classes={classes} />);
    classes.forEach(c => expect(navBar.hasClass(c)).toBe(true));
    expect(navBar.html()).toStrictEqual(
      `<nav class="${classes[0]} ${classes[1]}"></nav>`
    );
  });

  it('renders an id', () => {
    const id = 'howard-melnyczuk';
    const navBar = shallow(<NavBar id={id} />);
    expect(!!navBar.find(`#${id}`)).toBe(true);
  });

  it('renders a title', () => {
    const title = 'howard-melnyczuk';
    const navBar = shallow(<NavBar title={title} />)
    const navTitle = navBar.find(`#nav-title-${title}`);
    expect(navTitle.exists()).toBe(true);
    expect(navBar.html()).toStrictEqual(
      `<nav><h1 id="nav-title-${title}">${title}</h1></nav>`
    );
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
