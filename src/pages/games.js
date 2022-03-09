import React, { lazy, Suspense } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import Separator from '../components/Separator';
import Container from '../components/Container';

const Grid = lazy(() => import('../components/games/Grid'));

const Games = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Games' })} />
    <Container>
      <Separator title={intl.formatMessage({ id: 'Games' })} />
      <Suspense fallback={<p>Loading...</p>}>
        <Grid games={data.allMarkdownRemark.edges.map(x => x.node.frontmatter)} />
      </Suspense>
    </Container>
  </Layout>
);

export default injectIntl(Games);

export const query = graphql`
  query GamesQuery($locale: String) {
    allMarkdownRemark(
      filter: { frontmatter: { locale: { eq: $locale } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            tagline
            slug
            published
            icon {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
