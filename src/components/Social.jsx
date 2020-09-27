import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import { FaTwitter, FaFacebook, FaStumbleupon } from 'react-icons/fa';

const StyledSocial = styled.div`
  a {
    text-decoration: none;
    color: var(--primary-color);
    margin-right: 16px;
  }
`;

const Social = ({ intl }) => (
  <StyledSocial>
    <a
      href="https://twitter.com/share?url=https%3A%2F%2Fgames.kloder.com%2Fes%2Fgames%2Fbouncer&amp;text=Bouncer"
      title={intl.formatMessage({ id: 'Share On' }) + ' Twitter'}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter size={24} />
    </a>
    <a
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgames.kloder.com%2Fes%2Fgames%2Fbouncer"
      title={intl.formatMessage({ id: 'Share On' }) + ' Facebook'}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook size={24} />
    </a>
    <a
      href="http://www.stumbleupon.com/submit?url=https%3A%2F%2Fgames.kloder.com%2Fes%2Fgames%2Fbouncer&amp;title=Bouncer"
      title={intl.formatMessage({ id: 'Share On' }) + ' StumbleUpon'}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaStumbleupon size={24} />
    </a>
  </StyledSocial>
);

export default injectIntl(Social);
