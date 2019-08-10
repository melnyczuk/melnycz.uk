import { mount, shallow } from 'enzyme';

import yaml from 'js-yaml';

import Post, { fetchDescription } from '../../components/Post';

beforeEach(() => {
  yaml.load = jest.fn().mockResolvedValue({ description: ['boop', 'beep'] });
})

afterEach(() => {
  jest.clearAllMocks();
});

describe('Post Component', () => {
  const post = shallow(<Post />);

  it('is a React Suspense element', () => {
    expect(post.name()).toEqual('Suspense');
  });

  it('renders an article element', () => {
    expect(post.find('article')).toHaveLength(1);
  });

  it.skip('fetches a description from a yaml file', async () => {
    // await post.render();
    console.log(post.html());
    expect(await post.text()).toEqual('boop beep');
  });
});

describe('fetchDescription', () => {
  it('uses js-yaml load function', async () => {
    await fetchDescription('boop');
    expect(yaml.load).toHaveBeenCalled();
  });
});