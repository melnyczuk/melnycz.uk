import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/components/App';
import NavBar from '../src/components/Nav';
import Viewer from '../src/components/Viewer';

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

  it('renders with Viewer component', () => {
    const app = shallow(<App />);
    expect(!!app.find(Viewer)).toBe(true);
  });
});

describe('Nav', () => {
  it('renders with className "navbar"', () => {
    const classes = ['navigation'];
    const navBar = shallow(<NavBar classes={classes} />);
    expect(navBar.hasClass(classes[0])).toBe(true);
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

describe('Viewer', () =>{});
