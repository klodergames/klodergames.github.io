import React from 'react';
import styled from 'styled-components';
import { Link, injectIntl } from 'gatsby-plugin-intl';

import Icon from '../Icon';
import LanguageSwitcher from './LanguageSwitcher';

const StyledFooter = styled.footer`
  margin-top: auto;
  text-align: center;
  background-color: #343a40;
  padding: 32px 0 64px 0;
  font-weight: 400;
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
    color: var(--text-color);
  }
`;

const StyledCopy = styled.div`
  font-size: 80%;
`;

const StyledLegal = styled.div`
  font-size: 80%;
  a {
    font-weight: bold;
    color: var(--text-color);
    &:hover {
      color: var(--primary-color);
      text-decoration: none;
    }
  }
`;

const socialLinks = [
  {
    href: 'https://twitter.com/klodergames',
    icon: 'twitter',
    label: 'Twitter',
  },
  {
    href: 'https://www.youtube.com/channel/UCc4mtOUYEoZdrNzrJ5chaTg',
    icon: 'youtube',
    label: 'Youtube',
  },
  {
    href: 'https://github.com/kloder-games',
    icon: 'github',
    label: 'Github',
  },
  {
    href: 'https://play.google.com/store/apps/dev?id=7368457313230879486&hl=es',
    icon: 'google-play',
    label: 'Google Play',
  },
  {
    href:
      'https://www.amazon.es/Kloder-Games-Apps-Juegos/s?k=Kloder+Games&rh=n%3A1661649031',
    icon: 'amazon',
    label: 'Amazon',
  },
];

const Footer = ({ intl, siteTitle }) => (
  <StyledFooter>
    <StyledTagLine>Old Games Die Hard</StyledTagLine>
    <StyledSocial>
      {socialLinks.map((x, idx) => (
        <a
          key={idx}
          href={x.href}
          target={'_blank'}
          rel={'noopener noreferrer'}
          aria-label={x.label}
        >
          <Icon id={x.icon} size={32} />
        </a>
      ))}
    </StyledSocial>
    <StyledCopy>
      {new Date().getFullYear()} © {siteTitle}.{' '}
      {intl.formatMessage({ id: 'All Right Reserved.' })}
    </StyledCopy>
    <StyledLegal>
      <Link to="/privacy-policy">
        {intl.formatMessage({ id: 'Privacy Policy' })}
      </Link>
      &nbsp;|&nbsp;
      <Link to="/cookies-policy">
        {intl.formatMessage({ id: 'Cookies Policy' })}
      </Link>
    </StyledLegal>
    <LanguageSwitcher />
  </StyledFooter>
);

export default injectIntl(Footer);
