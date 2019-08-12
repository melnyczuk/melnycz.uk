import { mount, shallow } from 'enzyme';

import Punctum, { Label } from '../../src/components/Punctum';

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
    title='toast'
  />);

  it('has a Picture component', () => {
    expect(punct.render().find('picture')).toHaveLength(1);
  });

  it('has a Label component', () => {
    expect(punct.find('Label')).toHaveLength(1);
  });

  it('does not render anything if an image prop is not provided', () => {
    const emptyPunct = shallow(<Punctum />);
    expect(emptyPunct.isEmptyRender()).toBeTruthy();
  });
});

describe('Label Component', () => {
  const label = shallow(<Label title='toast' />);

  it('has a div with a class of punctum--label', () => {
    expect(label.find('div').hasClass('punctum--label')).toBeTruthy();
  });

  it('has a h2 with a class of punctum--title', () => {
    expect(label.find('h2').hasClass('punctum--title')).toBeTruthy();
  });

  it('has the correct text', () => {
    expect(label.text()).toEqual('toast');
  });
});
