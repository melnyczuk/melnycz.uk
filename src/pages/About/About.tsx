import React, { FC } from 'react';
import { root } from '../../../static/info.json';
import { image, title } from '../../../static/about/data.json';

import PageTitle from '../../components/PageTitle';
import Description from '../../components/Post/Description';
import Picture from '../../components/Picture';

const About: FC = () => (
  <article className="post">
    <PageTitle>{title}</PageTitle>
    <Description path={`${root}/about`} />
    <Picture path={`${root}/about`} image={image} parent="post" />
  </article>
);

export default About;
