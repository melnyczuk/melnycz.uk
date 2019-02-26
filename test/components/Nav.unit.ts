import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavBar, NavBarProps } from '../../src/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Nav Component', () => {
  const nullProps: NavBarProps = {
    links: null,
  };

  const navMarkup = '<nav class="nav"></nav>';

  it('renders', () => {
    const element = React.createElement(NavBar);
    const navBar = shallow(element);
    expect(navBar.exists()).toBe(true);
  });

  it('renders with custom classes', () => {
    const element = React.createElement(NavBar, nullProps);
    const navBar = shallow(element);
    expect(navBar.hasClass('nav')).toBe(true);
    expect(!!navBar.find('#nav')).toBe(true);
    expect(navBar.html()).toStrictEqual(navMarkup);
  });

  it('renders with buttons with text, id and relative href', () => {
    const links = ['Art', 'Code'];
    const element = React.createElement(NavBar, { ...nullProps, links });
    const navButtons = shallow(element).children().map(
      button => button.shallow()
    );

    expect(navButtons.length).toBe(2);

    console.log(navButtons[0].debug());

    navButtons.forEach(navButton => {
      expect(navButton.hasClass('nav-button')).toBe(true);
      expect(navButton.find('#art').length).toBe(1);
      expect(navButton.find('a').find('[href="/art"]').length).toBe(1);
      expect(navButton.text()).toBe('Art');
    });
    
  });
});
