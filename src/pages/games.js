import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import Separator from '../components/Separator';
import Grid from '../components/games/Grid';
import Container from '../components/Container';

const Games = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Games' })} />
    <Container>
      <Separator title={intl.formatMessage({ id: 'Games' })} />
      <Grid games={data.allGamesYaml.edges.map(x => x.node)} />
    </Container>
  </Layout>
);

export default injectIntl(Games);

export const query = graphql`
  query GamesQuery($locale: String) {
    allGamesYaml(
      filter: { locale: { eq: $locale } }
      sort: { order: DESC, fields: date }
    ) {
      edges {
        node {
          title
          tagline
          slug
          published
        }
      }
    }
  }
`;
