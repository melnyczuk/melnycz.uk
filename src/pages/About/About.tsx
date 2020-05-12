import React, { FC } from 'react';

import App from '../../components/App';
import Post from '../../components/Post';

import { title, media } from '../../../static/db/about.json';

const About: FC = () => (
  <App page="about">
    <Post namespace="aboutbio" title={title} imgs={media?.punctum} />
  </App>
);

export default About;
