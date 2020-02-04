import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import KPIs from '../components/home/KPIs';
import Container from '../components/Container';
import Slider from '../components/home/Slider';

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Start' })} />
    <Slider games={data.allGamesYaml.edges.map(x => x.node)} />
    <Container featured={true}>
      <KPIs />
    </Container>
  </Layout>
);

export default injectIntl(IndexPage);

export const query = graphql`
  query GamesForHomeQuery($locale: String) {
    allGamesYaml(
      filter: { locale: { eq: $locale }, published: { eq: 1 } }
      sort: { order: DESC, fields: date }
      limit: 3
    ) {
      edges {
        node {
          title
          tagline
          slug
        }
      }
    }
  }
`;
