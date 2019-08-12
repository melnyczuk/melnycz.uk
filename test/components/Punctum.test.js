import { mount, shallow } from 'enzyme';

import Punctum from '../../src/components/Punctum';

describe('Punctum Component', () => {
  const img = {
    namespace: "test",
    index: 2,
    alt: "blah",
    ext: "jpg",
    sizes: [69, 420]
  };

  const punct = shallow(<Punctum
    area='test'
    namespace='toast'
    image={img}
  />);

  it('has a Picture component', () => {
    expect(punct.render().find('picture')).toHaveLength(1);
  });

  it('does not render anything if an image prop is not provided', () => {
    const emptyPunct = shallow(<Punctum />);
    expect(emptyPunct.isEmptyRender()).toBeTruthy();
  });
});
