import React from 'react';
import { shallow } from 'enzyme';

import Index from '../pages/index.tsx';

describe('Index', () => {
  it('renders a site title', () => {
    const i = shallow(<Index/>);
    expect(i).toMatchSnapshot(
      `<h1 className='site-title'>Howard Melnyczuk</h1>`
    );
  });
});