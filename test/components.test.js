import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/components/App';
import Nav from '../src/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Nav', () => {
  it('renders with className "navbar"', () => {
    const className = 'nav-bar';
    const navBar = shallow(<Nav className={className} />);
    expect(navBar.hasClass(className)).toBe(true);
  });

  it('renders with buttons with id and relative href', () => {
    const buttons = [ 'art', 'coding' ];
    const navButtons = shallow(<Nav buttons={buttons} />).find('.nav-button');
    expect(navButtons).toHaveLength(2);
    buttons.forEach(button => {
      const selector = `#${button}`;
      expect(navButtons.find(selector)).toHaveLength(1);
      expect(navButtons.find(`[href="${selector}"]`)).toHaveLength(1);
    });
  });
});
