import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import Separator from '../components/Separator';
import Markdown from '../components/Markdown';
import Container from '../components/Container';

const CookiesPolicy = ({ intl }) => {
  const title = intl.formatMessage({ id: 'Cookies Policy' });
  const file = `cookies-policy.${intl.locale}.md`;
  return (
    <Layout>
      <Container>
        <SEO title={title} />
        <Separator title={title} />
        <Markdown text={require(`!!raw-loader!../../data/static/${file}`)} />
      </Container>
    </Layout>
  );
};

export default injectIntl(CookiesPolicy);
