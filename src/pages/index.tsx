import { graphql } from 'gatsby';
import React, { ComponentProps, FC } from 'react';
import ProjectPage from './projects';

export const homePageQuery = graphql`
  query HomePageQuery {
    folio {
      projects {
        id
        name
        year
        hide
        imageSet {
          name
          url
        }
        textSet {
          url
        }
      }
    }
  }
`;

const IndexPage: FC<ComponentProps<typeof ProjectPage>> = (props) => (
  <ProjectPage {...props} />
);

export default IndexPage;
