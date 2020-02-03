import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';

const StyledNotFoundPage = styled.div`
  text-align: center;
  margin: 100px 0;
  h2 {
    margin-top: 32px;
  }
`;

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: '404: Not found' })} />
    <StyledNotFoundPage>
      <img src={require('../images/404.png')} />
      <h2>
        {intl.formatMessage({
          id: "Ooooh... we don't have this content... sorry!",
        })}
      </h2>
    </StyledNotFoundPage>
  </Layout>
);

export default injectIntl(NotFoundPage);
