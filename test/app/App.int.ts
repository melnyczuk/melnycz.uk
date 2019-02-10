import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../src/app';
import Areas from '../../src/app/areas';
import { NavBar } from '../../src/components/nav/NavBar';


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
    expect(!!app.find(Areas)).toBe(true);
  });
});
