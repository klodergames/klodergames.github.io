import React from 'react';
import styled from 'styled-components';
import { Link, injectIntl } from 'gatsby-plugin-intl';

import LanguageSwitcher from './LanguageSwitcher';
import socialLinks from '../../../data/social';

const StyledFooter = styled.footer`
  margin-top: auto;
  text-align: center;
  background-color: #343a40;
  padding: 32px 0 32px 0;
  font-weight: 400;
  font-size: 80%;
  color: var(--text-color);
  a {
    color: var(--text-color);
    font-weight: bold;
  }
`;

const StyledTagLine = styled.h2`
  padding-bottom: 0;
`;

const StyledSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 32px);
  @media only screen and (max-width: 330px) {
    & {
      grid-template-columns: repeat(3, 32px);
    }
  }
  grid-gap: 32px;
  justify-content: center;
  margin: 0 auto 16px;
  a {
    text-decoration: none;
  }
`;

const Footer = ({ intl, siteTitle }) => (
  <StyledFooter>
    <StyledTagLine>Old Games Die Hard</StyledTagLine>
    <StyledSocial>
      {socialLinks.map(({ href, label, Icon }, idx) => (
        <a
          key={idx}
          href={href}
          target={'_blank'}
          rel={'noopener noreferrer'}
          aria-label={label}
        >
          <Icon size={'32px'} />
        </a>
      ))}
    </StyledSocial>
    <div>
      {new Date().getFullYear()} © {siteTitle}.{' '}
      {intl.formatMessage({ id: 'All Right Reserved.' })}
    </div>
    <div>
      <Link to="/privacy-policy">
        {intl.formatMessage({ id: 'Privacy Policy' })}
      </Link>
      &nbsp;|&nbsp;
      <Link to="/cookies-policy">
        {intl.formatMessage({ id: 'Cookies Policy' })}
      </Link>
    </div>
    <LanguageSwitcher />
  </StyledFooter>
);

export default injectIntl(Footer);
