import { graphql } from 'gatsby';
import React, { ComponentProps, FC } from 'react';
import ProjectPage from './projects';

export const homePageQuery = graphql`
  query HomePageQuery {
    folio {
      projects {
        name
        year
        hide
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

const IndexPage: FC<ComponentProps<typeof ProjectPage>> = (props) => (
  <ProjectPage {...props} />
);

export default IndexPage;
