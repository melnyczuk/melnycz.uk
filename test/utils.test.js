import { 
  buildSrc, 
  filterMedia,
  filterWorks, 
  addBaseUrlAndTypeToPartialMediaItem 
} from '../utils';

describe('buildSrc', () => {
  const mediaItem = {
    type: 'videos', 
    baseUrl: './here', 
    namespace: 'test', 
    index: 0, 
    ext: 'mov',
    alt:'tester',
  };
  const size = 640;

  it('returns a function that returns a source path', () => {
    const source = buildSrc(mediaItem)(size);
    expect(source).toEqual('./here/videos/640/test-0.mov');
  });
});

describe('filterMedia', () => {
  const partialMediaItem = {
    type: 'videos', 
    baseUrl: './here', 
    ext: 'mov',
    alt:'tester',
  };

  const indicies = [69,420];
  const namespace = 'test';

  const mediaFilterer = filterMedia(indicies)(namespace);

  it('returns true if namespace matches and index is in indicies array', () => {
    const mediaItem = { ...partialMediaItem, namespace: 'test', index: 69 };
    const result = mediaFilterer(mediaItem);
    expect(result).toEqual(true);
  });

  it('returns false if namespace matches but the index is not in indicies', () => {
    const mediaItem = { ...partialMediaItem, namespace: 'test', index: 45 };
    const result = mediaFilterer(mediaItem);
    expect(result).toEqual(false);
  });

  it('returns false if namespace does not match but the index is in indicies', () => {
    const mediaItem = { ...partialMediaItem, namespace: 'toast', index: 420 };
    const result = mediaFilterer(mediaItem);
    expect(result).toEqual(false);
  });

  it('returns false if namespace does not match and the index is not in indicies', () => {
    const mediaItem = { ...partialMediaItem, namespace: 'toast', index: 45 };
    const result = mediaFilterer(mediaItem);
    expect(result).toEqual(false);
  });

});

describe('filterWorks', () => {
  const works = [
    {area: 'test'},
    {area: 'test'},
    {area: 'nottest'},
    {area: 'test'},
  ];
  const label = 'test';
  
  it('returns a function that returns works filtered by a label', () => {
    const filteredWorks = filterWorks(works)(label); 
    expect(filteredWorks).toHaveLength(3);
  });
});

describe('addBaseUrlAndTypeToPartialMediaItem', () => {
  const baseUrl = './here';
  const type = 'audios';
  const partialMediaItem = {
    namespace: 'test', 
    index: 0, 
    ext: 'mov', 
    alt:'tester', 
  };

  it('returns a function that returns a function that returns a valid MediaItem', () => {
    const validMediaItem = addBaseUrlAndTypeToPartialMediaItem(baseUrl)(type)(partialMediaItem);
    expect(validMediaItem).toEqual({
      namespace: 'test', 
      index: 0, 
      ext: 'mov', 
      alt:'tester', 
      baseUrl: './here',
      type: 'audios',
    })
  });
});