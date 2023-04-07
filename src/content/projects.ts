import { ProjectType } from '../types';

const projects: (Omit<ProjectType, 'image'> & {
  image: Pick<ProjectType['image'], 'src'>;
})[] = [
  {
    name: 'Wool-gather',
    year: 2021,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/yvf5b69uwqs5oa9/wool-gather.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/qp5ygldobmn31gy/wool-gather-9.jpg',
    },
  },
  {
    name: 'Silver Coord',
    year: 2021,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/za1nxpudmno19kj/silver-coord.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/6utewbu0iov54lx/silver-coord-2.jpg',
    },
  },
  {
    name: 'Cone of Power',
    year: 2021,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/d42j52e2h1l8aka/cone-of-power.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/7u8oebqf3gqvqjx/cone-of-power-1.jpg',
    },
  },
  {
    name: 'Supercollager',
    year: 2020,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/m9f2s54w7vszb6t/supercollager.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/6zyqp80obmosehg/supercollager-krakow.jpg',
    },
  },
  {
    name: 'A Tree Grew Through My Window',
    year: 2019,
    description: {
      local: null,
      url:
        'https://dl.dropbox.com/s/6bede848uuv68v4/a-tree-grew-through-my-window.md',
    },
    image: {
      src:
        'https://dl.dropbox.com/s/kaejjyr57i2g1zn/a-tree-grew-through-my-window-1.jpg',
    },
  },
  {
    name: 'Object Permanence',
    year: 2018,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/9w1km0sylms5pqf/object-permanence.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/9z380lfu88spoqo/object-permanence-7.jpg',
    },
  },
  {
    name: 'Gail, for the Bureau of Meteoranxiety',
    year: 2018,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/x3zlk2a7jqseqoj/gail-the-bomachat.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/7bk8zjujh9oixaz/gail-the-bomachat-3.jpg',
    },
  },
  {
    name: 'Rrosetta',
    year: 2017,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/1rikewwdaq141dn/rrosetta.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/mtakf7ww8dc4qnw/rrosetta-3.jpg',
    },
  },
  {
    name: 'On The Side of Every Mountain Is Another, Smaller Mountain',
    year: 2016,
    description: {
      local: null,
      url:
        'https://dl.dropbox.com/s/tk09276h4aiow4g/on-the-side-of-every-mountain-is-another-smaller-mountain.md',
    },
    image: {
      src:
        'https://dl.dropbox.com/s/a3bp5fa6c5b36pr/on-the-side-of-every-mountain-is-another-smaller-mountain-6.jpg',
    },
  },
  {
    name: 'Texture Cache',
    year: 2016,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/tj8hg2p3azuln42/texture-cache.md',
    },
    image: {
      src: 'https://dl.dropbox.com/s/0435zo31o9inj4w/texture-cache-2.jpg',
    },
  },
];

export default projects;
