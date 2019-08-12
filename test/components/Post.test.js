import { shallow } from 'enzyme';

import yaml from 'js-yaml';

import Post, { fetchDescription, buildImages, Description, triggerFetch } from '../../src/components/Post';

beforeEach(() => {
  yaml.load = jest.fn().mockResolvedValue({ description: ['boop', 'beep'] });
})

afterEach(() => {
  jest.clearAllMocks();
});

describe('Post Component', () => {
  const post = shallow(<Post />);

  it('is an article element', () => {
    expect(post.name()).toEqual('article');
  });

  it('renders an article element', () => {
    expect(post.find('article')).toHaveLength(1);
  });

  it('has a class name of post', () => {
    expect(post.hasClass('post')).toBeTruthy();
  });

  describe('title', () => {    
    it('renders no title if title is omitted from props', () => {
      const title = post.find('h2');
      expect(title).toHaveLength(0);
    });

    it('renders a title', () => {
      const postWithTitle = shallow(<Post title='test' />);
      const title = postWithTitle.find('h2');
      expect(title).toHaveLength(1);
      expect(title.text()).toEqual('test');
    });
  });

  describe('images', () => {    
    it('renders no images if images is omitted from props', () => {
      const images = post.find('picture');
      expect(images).toHaveLength(0);
    });

    it('renders a title', () => {
      const imagesArray = [
        {
          namespace: 'test',
          index: 2,
          alt: 'test image',
          ext: 'jpg',
          sizes: [69,420],
        },
        {
          namespace: 'test',
          index: 3,
          alt: 'test image',
          ext: 'jpg',
          sizes: [69,420],
        },
        {
          namespace: 'test',
          index: 4,
          alt: 'test image',
          ext: 'jpg',
          sizes: [69,420],
        },
      ]
      const postWithImages = shallow(<Post images={imagesArray} />);
      const images = postWithImages.render().find('picture');
      expect(images).toHaveLength(3);
    });
  });
});

describe('Description Component', () => {
  const descriptionArray = ['hello', 'I am test']
  const description = shallow(<Description description={descriptionArray} />);

  it('builds a description component', () => {
    expect(description.type()).toEqual('div');
    expect(description.hasClass('post')).toBeTruthy();
    expect(description.hasClass('post--desc')).toBeTruthy();
  });

  it('rendes a paragraph for every string in the description array', () => {
    const paragraphs = description.find('p');
    expect(paragraphs).toHaveLength(descriptionArray.length);
    descriptionArray.forEach((p, i) => {
      expect(paragraphs.at(i).text()).toEqual(p);
      expect(paragraphs.at(i).hasClass('post--desc--paragraph')).toBeTruthy();
    })
  });
});

describe('fetchDescription', () => {
  it('uses js-yaml load function', async () => {
    await fetchDescription('boop');
    expect(yaml.load).toHaveBeenCalled();
  });
});

describe('buildImages', () => {
  const image = {
    namespace: 'test',
    index: 2,
    alt: 'test',
    ext: 'jpg',
    sizes: [69, 420],
    baseUrl: './test',
    type: 'images'
  };

  it('returns a Picture Component from an image', () => {
    const pic = buildImages(image);
    expect(shallow(pic).type()).toEqual('picture');
    expect(shallow(pic).find('img').prop('src'))
      .toEqual('./test/images/640/test-2.jpg');
    expect(pic.key).toEqual('test-2');
    expect(pic.props.parent).toEqual('post');
    expect(pic.props.max).toEqual(640);
  });
});

describe('triggerFetch', () => {
  it('triggers a fetch then calls the callback function without returing anything', () => {
    const callback = (data) => {
      expect(data).toEqual(['boop','beep'])
    };
    const func = triggerFetch('test', callback);
    const returnVal = func();
    expect(returnVal).toEqual(undefined);
  })
});
