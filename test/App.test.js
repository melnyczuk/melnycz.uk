import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../src/App';
import NavBar from '../src/components/Nav';
import Viewer from '../src/components/Viewer';

Enzyme.configure({ adapter: new Adapter() });

describe.only('App', () => {
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
