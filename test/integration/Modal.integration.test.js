import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/modal/Modal';
import Post from '../../src/components/post/Post';

Enzyme.configure({ adapter: new Adapter() });

describe.only('App', () => {
  const namespace = 'intTestModal'
  const testStore = configureStore()({ [namespace]: { visible: true } })

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={testStore} >
        <Modal>
          <Post />
        </Modal>
      </Provider>, 
    div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with NavBar component', () => {
    const app = shallow(
      <Provider store={testStore} >
        <Modal id={'intTestModal'} >
          <Post />
        </Modal>
      </Provider>
    );

    expect(!!app.find(Post)).toBe(true);
  });
});
