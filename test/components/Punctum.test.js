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
    title='test'
    namespace='test'
    punctum={img}
    images={[img]}
  />);

  it('has a Picture component', () => {
    expect(punct.render().find('picture')).toHaveLength(1);
  });

  it('renders and unrenders a post when clicked', () => {
    expect(punct.render().find('article')).toHaveLength(0);
    punct.find('.punctum').simulate('click');
    expect(punct.render().find('article')).toHaveLength(1);
    punct.find('.punctum').simulate('click');
    expect(punct.render().find('.post')).toHaveLength(0);
  });

  it('does nothing when the post component is clicked', () => {
    punct.find('.punctum').simulate('click');
    const post = punct.render().find('article');
    expect(punct.render().find('article')).toHaveLength(1);
    shallow(<post />).simulate('click');
    expect(post).toHaveLength(1);
    punct.find('.punctum').simulate('click');
    expect(punct.render().find('article')).toHaveLength(0);
  });

  it('does not render anything if an image prop is not provided', () => {
    const emptyPunct = shallow(<Punctum />);
    expect(emptyPunct.isEmptyRender()).toBeTruthy();
  });
});
