import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/components/App';
import NavBar from '../src/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with NavBar component', () => {
    const app = shallow(<App />);
    expect(!!app.find(NavBar)).toBe(true);
  });
});

describe('Nav', () => {
  it('renders with className "navbar"', () => {
    const className = 'navigation';
    const navBar = shallow(<NavBar className={className} />);
    expect(navBar.hasClass(className)).toBe(true);
  });

  it('renders a title', () => {
    const title = 'howard-melnyczuk';
    const navBar = shallow(<NavBar title={title} />);
    expect(navBar.text()).toBe(title);
    expect(!!navBar.find(`#${title}`)).toBe(true);
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
