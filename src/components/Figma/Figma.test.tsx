import React from 'react';
import { shallow } from 'enzyme';

import Figma from './Figma';

describe(Figma, () => {
  it('renders if the url is valid', () => {
    const src =
      'https://www.figma.com/file/Degx420lgFD2G67H035smd/some-project';
    const component = shallow(<Figma src={src} />);
    expect(component.find('iframe').prop('src')).toContain(src);
  });

  it('performs an empty render if the src url is invalid', () => {
    const src =
      'https://www.notfigma.com/file/Degx420l5gFD2G65smd/some-project';
    const component = shallow(<Figma src={src} />);
    expect(component.isEmptyRender()).toBe(true);
  });
});
