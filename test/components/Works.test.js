import React from 'react';
import { mount } from 'enzyme';

import Works,
{
  mediaTypeCompletionFunc,
  imageTypeCompletionFunc,
} from '../../src/components/Works';

describe('Works Component', () => {
  //https://stackoverflow.com/questions/42986480/jest-mock-import-of-json-file/42993809
  const component = mount(<Works area='about' />);

  it('renders a punctum for every live work in an area', () => {
    const punctums = component.find('.punctum');
    expect(punctums).toBeHaveLength(1);
  });

});

describe('mediaTypeCompletionFunc', () => { });
describe('imageTypeCompletionFunc', () => { });