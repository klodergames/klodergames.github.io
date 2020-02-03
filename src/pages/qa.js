import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import Container from '../components/Container';
import Section from '../components/qa/Section';

const QA = ({ intl }) => {
  const data = require(`../../data/static/qa.${intl.locale}.yaml`);
  return (
    <Layout>
      <Container>
        <SEO title={intl.formatMessage({ id: 'Q&A' })} />
        {data.map((x, idx) => (
          <Section section={x} key={idx} />
        ))}
      </Container>
    </Layout>
  );
};

export default injectIntl(QA);
