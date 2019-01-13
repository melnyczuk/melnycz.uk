import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../../src/components/modal/Modal';
import Punctum from '../../src/components/punctum/Punctum';

Enzyme.configure({ adapter: new Adapter() });

describe('Punctum', () => {

  const mockStore = configureStore();

  describe.skip('Modal Interaction', () => {
    
    it('clicking it makes the corresponding modal visible', () => {
      const testNamespace = 'test';
      const dummySrc = './dummysrc.jpg'
      const altText = 'testImage';

      const mockShowModalFn = jest.fn();

      const store = mockStore({ 
        [testNamespace]: { 
          src: dummySrc, 
          alt: altText, 
          visible: false 
        },
        showModal: mockShowModalFn
      });
      
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

      expect(mockShowModalFn).toBeCalled();

      // expect(shallow(
      //   <Provider store={store} >
      //     <Modal namespace={testNamespace} />
      //   </Provider>
      // ).html())
      // .toStrictEqual('<div></div>');
    });
});
})