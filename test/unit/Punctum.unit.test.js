import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Punctum from '../../src/components/punctum/Punctum';
import modalStore from '../../src/components/modal/modal.store';


const { setModalVisibility } = modalStore.actionCreators;
const { selectModalVisibility } = modalStore.selectors;

Enzyme.configure({ adapter: new Adapter() });

describe('Punctum', () => {

  const mockStore = configureStore();

  it('renders', () => {
    const store = mockStore({ 'test': { src: false, alt: false }});
    
    const punctum = shallow(
      <Provider store={store}>
        <Punctum namespace={'test'} />
      </Provider>
    );

    expect(punctum.exists()).toBe(true);
    expect(mount(punctum.get(0)).length).toBe(1);
    expect(punctum.html()).toStrictEqual('<div></div>');
  });

  it('renders with additional classes', () => {
    const classes = ['image', 'entrypoint'];
    const testNamespace = 'test';
    const store = mockStore({ [testNamespace]: { src: false }});

    const punctum = shallow(
      <Provider store={store}>
        <Punctum namespace={'test'} classes={classes} />
      </Provider>
    );

    expect(punctum.html()).toStrictEqual(
      `<div class="${classes[0]} ${classes[1]}"></div>`
    );
  });

  it('renders with an image', () => {
    const testNamespace = 'test';
    const dummySrc = './dummysrc.jpg'
    const altText = 'testImage';
    const store = mockStore({ [testNamespace]: { src: dummySrc, alt: altText }});
    
    const punctum = shallow(
      <Provider store={store}>
        <Punctum namespace={testNamespace} />
      </Provider>
    );

    expect(mount(punctum.get(0))
      .contains(
        <img src={dummySrc} alt={altText} />
      )
    ).toBe(true);
  });

  describe('clicking it', () => {
    it('clicking on a punctum changes the store', () => {
      const testNamespace = 'test';
      const dummySrc = './dummysrc.jpg'
      const altText = 'testImage';
      
      const mock = jest.fn();

      const store = mockStore({ 
        [testNamespace]: { 
          src: dummySrc, 
          alt: altText, 
          visible: false 
        }
      });
      
      const punctum = shallow(
        <Provider store={store}>
          <Punctum namespace={testNamespace} showmodal={'boop'} />
        </Provider>
      );
  
      punctum.find(Punctum).simulate('click');

      // expect(mock).toBeCalled();
      
      // store.dispatch(setModalVisibility({
      //   namespace: testNamespace,
      //   value: true
      // }));

      // const state = store.getState();
      // const visibility = selectModalVisibility(state, testNamespace);
      // expect(visibility).toBe(true);
    });
  });
});