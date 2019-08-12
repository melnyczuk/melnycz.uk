import { shallow, mount } from 'enzyme';

import Picture, { getSourceComponent } from '../../src/components/Picture';

describe('Picture', () => {
  const img = {
    sizes: [69, 420]
  }
  const pic = shallow(<Picture image={img} max={640} parent='test' />);

  it('is a picture tag', () => {
    expect(pic.type()).toEqual('picture');
  });

  it('has a class of .picture', () => {
    const c = pic.find('.picture');
    expect(c).toHaveLength(1);
  });
});

describe('getSourceTags', () => {
  const sourceBuilder = jest.fn().mockReturnValue('./here/videos/420/test-0.mov');
  const max = 69;
  const size = 420;
  const parent = 'test'

  const Source = getSourceComponent(sourceBuilder, parent, max);
  
  it('returns a React Functional Component', () => {
    expect(typeof Source).toEqual('function');
  });

  it('returns a source tag with the correct attributes', () => {
    const expectedSource = shallow(<Source size={size} />);
    const testSource = <source className='picture--source test--source' media='(max-width: 69px)' srcSet='./here/videos/420/test-0.mov'/>;
    expect(expectedSource.matchesElement(testSource)).toBeTruthy();
  });
});