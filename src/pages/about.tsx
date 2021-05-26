import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { Navigation, Text } from '../components';

type AboutPageProps = PageProps & {
  data: {
    folio: {
      project: {
        texts: [
          {
            url: string;
            name: string;
          }
        ];
      };
    };
  };
};

export const projectPageQuery = graphql`
  query AboutPageQuery {
    folio {
      project(name: "about") {
        texts {
          name
          url
        }
      }
    }
  }
`;

const AboutPage: FC<AboutPageProps> = ({ data, path }) => {
  const urls = data.folio.project.texts.reduce(
    (acc, { name, url }) => ({ ...acc, [name]: url }),
    {}
  );

  return (
    <>
      <Navigation path={path} />
      <main className="about-page">
        <div className="about__text">
          <Text className="about__text--bio" name="bio" url={urls['bio.md']} />
          <Text className="about__text--cv" name="cv" url={urls['cv.md']} />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
