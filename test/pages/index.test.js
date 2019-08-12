import React from 'react';
import { mount } from 'enzyme';

import IndexPage, { getRandomImageIndexGenerator } from '../../pages/index.tsx';

import { sitetitle } from '../../static/db/info.json';

describe('Index', () => {
  const page = mount(<IndexPage/>);

  it('renders a site title', () => {
    const title = page.find('h1'); 
    expect(title).toHaveLength(1);
    expect(title.hasClass('site-title')).toBeTruthy();
    expect(title.text()).toEqual(sitetitle);
  });

  it('renders a nav', () => {
    const nav = page.find('.nav');
    expect(nav).toHaveLength(1);
  });

  it('renders a picture', () => {
    const pic = page.find('.picture');
    expect(pic).toHaveLength(1);
  });
});

describe('getRandomImageIndexGenerator', () => {
  it('generates a random number from all the numbers', () => {
    const numbers = [...Array(500).keys()];
    const generatorRandomNumber = getRandomImageIndexGenerator(500);
    const randomnumber = generatorRandomNumber();
    expect(numbers.includes(randomnumber)).toBeTruthy();
  });
});
