import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/Modal';
import Post from '../../src/components/Post';

Enzyme.configure({ adapter: new Adapter() });

describe.only('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal visible={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with NavBar component', () => {
    const app = shallow(
      <Modal visible={true}>
        <Post />
      </Modal>
    );
    expect(!!app.find(Post)).toBe(true);
  });
});
