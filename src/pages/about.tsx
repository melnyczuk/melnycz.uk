import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import { Navigation, Text } from '../components';

type AboutPageProps = PageProps;

const BIO_URL = 'https://dl.dropbox.com/s/pe6s9zkk93wjco6/bio.md';
const CV_URL = 'https://dl.dropbox.com/s/hpg0tuq7n1cyhgj/cv.md';

const AboutPage: FC<AboutPageProps> = ({ path }) => {
  return (
    <>
      <Navigation path={path} />
      <main className="about-page">
        <div className="about__text">
          <Text className="about__text--bio" name="bio" url={BIO_URL} />
          <Text className="about__text--cv" name="cv" url={CV_URL} />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
