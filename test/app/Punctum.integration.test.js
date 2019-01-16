import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/modal/Modal';
import Punctum from '../../src/components/punctum/Punctum';

import selectors from '../../src/store/selectors';

Enzyme.configure({ adapter: new Adapter() });

const { getModalVisibility } = selectors.modal;

describe.skip('Punctum', () => {

  const mockStore = configureStore();

  describe('clicking it', () => {
    it('clicking on a punctum changes the store', () => {
      const testNamespace = 'test';
      const dummySrc = './dummysrc.jpg'
      const altText = 'testImage';

      const store = mockStore({
        [testNamespace]: {
          src: dummySrc,
          alt: altText,
          visible: false
        }
      });

      const punctum = shallow(
        <Provider store={store}>
          <Punctum namespace={testNamespace} />
        </Provider>
      );

      console.log(punctum.dive().find(Punctum).props());//.showModal();

      const state = store.getState();
      const visibility = getModalVisibility(state, testNamespace);
      expect(visibility).toBe(true);
    });
  });

  describe('Modal Interaction', () => {

    it('clicking it makes the corresponding modal visible', () => {
      const testNamespace = 'test';
      const dummySrc = './dummysrc.jpg'
      const altText = 'testImage';

      const state = {
        [testNamespace]: {
          src: dummySrc,
          alt: altText,
          visible: false
        }
      };

      const store = mockStore(() => state);

      const punctum = shallow(
        <Provider store={store} >
          <Punctum namespace={testNamespace} />
        </Provider>
      );

      expect(shallow(
        <Provider store={store} >
          <Modal namespace={testNamespace} />
        </Provider>
      ).html())
      .toStrictEqual('');

      punctum.simulate('click');

      const newState = store.getState();
      console.log(newState);
      expect(getModalVisibility(newState, testNamespace)).toBe(true);

      // expect(shallow(
      //   <Provider store={store} >
      //     <Modal namespace={testNamespace} />
      //   </Provider>
      // ).html())
      // .toStrictEqual('<div></div>');
    });
});
})
