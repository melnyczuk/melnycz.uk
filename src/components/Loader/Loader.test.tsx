import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe(Loader, () => {
  it('returns the child when everything is ready', () => {
    const TestChild = () => <p>test child</p>;
    const component = shallow(
      <Loader<boolean> waitOn={[true, true]}>
        <TestChild />
      </Loader>
    );
    expect(component.find(TestChild).exists()).toBe(true);
  });

  it('returns the Loading... when something isn`t ready', () => {
    const TestChild = () => <p>test child</p>;
    const component = shallow(
      <Loader<boolean> waitOn={[true, false]}>
        <TestChild />
      </Loader>
    );
    expect(component.text()).toBe('Loading...');
  });
});
