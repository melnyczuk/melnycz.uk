import React, { FC } from 'react';
import Post from '../../components/Post';

import { title, media } from '../../../static/db/about.json';

const About: FC = () => (
  <Post namespace="aboutbio" title={title} imgs={media.punctum} />
);

export default About;
