import React from 'react';
import { shallow } from 'enzyme';

import Picture from '../../components/Picture';

describe('Picture', () => {
  const img = {
    sizes: [69, 420]
  }
  const pic = shallow(<Picture image={img} max={640} parent='test' />);

  it('is a picture tag', () => {
    const picTag = pic.find('picture');
    expect(picTag).toHaveLength(1);
  });

  it('has a class of .picture', () => {
    const c = pic.find('.picture');
    expect(c).toHaveLength(1);
  });
});