import { shallow } from 'enzyme';

import Picture, { getClassByParent, getSourcesByMax } from '../../components/Picture';

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

describe('getClassByParent', () => {
  it('get\'s the correct class for a parent and a picture element', () => {
    const className = getClassByParent('test')('picture');
    expect(className).toEqual('picture test--picture');
  });

  it('get\'s the correct class for a parent and any other element', () => {
    const className = getClassByParent('toast')('image');
    expect(className).toEqual('picture--image toast--image');
  });
});


describe('getSourcesByMax', () => {
  const max = 69;
  const size = 420;
  const i = 4;
  const sourceBuilder = jest.fn().mockReturnValue('./here/videos/420/test-0.mov');
  
  it('returns a source tag with the correct attributes', () => {
    const source = getSourcesByMax(max)(sourceBuilder)(size, i);
    const expectedSource = shallow(source);
    const testSource = <source media="(max-width: 69px)" srcSet="./here/videos/420/test-0.mov"/>;
    expect(expectedSource.matchesElement(testSource)).toBeTruthy();
  });
});