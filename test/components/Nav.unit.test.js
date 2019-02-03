import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from '../../src/components/nav/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Nav Component', () => {
  it('renders', () => {
    const navBar = shallow(<NavBar />);
    expect(navBar.exists()).toBe(true);
  });

  it('renders with custom classes', () => {
    const navBar = shallow(<NavBar />);
    expect(navBar.hasClass('nav')).toBe(true);
    expect(!!navBar.find('#nav')).toBe(true);
    expect(navBar.html()).toStrictEqual(
      '<nav id="nav" class="nav"></nav>',
    );
  });

  it('renders a title', () => {
    const title = 'howard melnyczuk';
    const navBar = shallow(<NavBar title={title} />);
    const navTitle = navBar.find('h1');
    expect(navTitle.length).toBe(1);
    expect(navTitle.hasClass('nav-title')).toBe(true);
    expect(navBar.html()).toStrictEqual(
      `<nav id="nav" class="nav"><h1 class="nav-title">${title}</h1></nav>`,
    );
  });

  it('renders with buttons with text, id and relative href', () => {
    const buttons = [['Art', '/art'], ['Code', '/code']];
    const navButtons = shallow(<NavBar buttons={buttons} />)
      .children()
      .shallow()
      .map(button => button.shallow());

    expect(navButtons.length).toBe(2);

    expect(navButtons[0].shallow().hasClass('nav-button')).toBe(true);
    expect(navButtons[0].find('#art').length).toBe(1);
    expect(navButtons[0].find('a').find('[href="/art"]').length).toBe(1);
    expect(navButtons[0].text()).toBe('Art');

    expect(navButtons[1].shallow().hasClass('nav-button')).toBe(true);
    expect(navButtons[1].find('#code').length).toBe(1);
    expect(navButtons[1].find('a').find('[href="/code"]').length).toBe(1);
    expect(navButtons[1].text()).toBe('Code');
  });
});
