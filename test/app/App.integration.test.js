import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from '../../src/app/App';
import NavBar from '../../src/components/nav/Nav';
import Areas from '../../src/app/areas/Areas';


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

  it('renders with Area component', () => {
    const app = shallow(<App />);
    expect(!!app.find(Areas)).toBe(true);
  });
});
