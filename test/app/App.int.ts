import * as React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../src/App';
import { NavBar } from '../../src/components/Nav';
import Portfolio from '../../src/App/Portfolio';


Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const app = React.createElement(App);
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with NavBar component', () => {
    const element = React.createElement(App);
    const app = shallow(element);
    expect(!!app.find(NavBar)).toBe(true);
  });

  it('renders with Area component', () => {
    const element = React.createElement(App);
    const app = shallow(element);
    expect(!!app.find(Portfolio)).toBe(true);
  });
});
