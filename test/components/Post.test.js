import { mount, shallow } from 'enzyme';

import yaml from 'js-yaml';

import Post, { fetchDescription } from '../../src/components/Post';

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
});

describe('fetchDescription', () => {
  it('uses js-yaml load function', async () => {
    await fetchDescription('boop');
    expect(yaml.load).toHaveBeenCalled();
  });
});