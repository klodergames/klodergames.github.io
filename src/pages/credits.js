import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import Separator from '../components/Separator';
import Container from '../components/Container';
import Markdown from '../components/Markdown';
import Tools from '../components/credits/Tools';
import Plugins from '../components/credits/Plugins';
import Icon from '../components/Icon';

const StyledCredits = styled.div`
  display: grid;
  grid-gap: 64px;
  margin: 32px 0;
  text-align: center;
`;

const Credits = ({ intl }) => {
  const file = `about.${intl.locale}.md`;
  return (
    <Layout>
      <Container>
        <SEO title={intl.formatMessage({ id: 'Credits' })} />
        <StyledCredits>
          <div>
            <Separator title={intl.formatMessage({ id: 'Who are we?' })} />
            <Markdown
              text={require(`!!raw-loader!../../data/static/${file}`)}
            />
          </div>
          <div>
            <Separator title={intl.formatMessage({ id: 'Tools' })} />
            <Tools />
          </div>
          <div>
            <Separator title={intl.formatMessage({ id: 'Plugins & More' })} />
            <Plugins />
          </div>
          <div>
            <Separator title={intl.formatMessage({ id: 'Contact' })} />
            <a href={'mailto:info@kloder.com'}>info@kloder.com</a>
            <br />
            <a href={'https://github.com/kloder-games'} target={'_blank'}>
              <Icon id={'github'} /> https://github.com/kloder-games
            </a>
          </div>
        </StyledCredits>
      </Container>
    </Layout>
  );
};

export default injectIntl(Credits);
