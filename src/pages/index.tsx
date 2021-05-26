import { graphql } from 'gatsby';
import React, { ComponentProps, FC } from 'react';
import ProjectPage from './projects';

const IndexPage: FC<ComponentProps<typeof ProjectPage>> = (props) => (
  <ProjectPage {...props} />
);

export const homePageQuery = graphql`
  query HomePageQuery {
    folio {
      projects {
        name
        year
        images {
          name
          url
        }
        texts {
          name
          url
        }
      }
    }
  }
`;

export default IndexPage;
