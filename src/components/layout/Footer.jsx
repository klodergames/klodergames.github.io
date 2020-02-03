import React from 'react';
import styled from 'styled-components';
import { Link, injectIntl } from 'gatsby-plugin-intl';

import Icon from '../Icon';

const StyledFooter = styled.footer`
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

const Footer = ({ intl, siteTitle }) => (
  <StyledFooter>
    <StyledTagLine>Old Games Die Hard</StyledTagLine>
    <StyledSocial>
      <a href={'https://twitter.com/klodergames'} target={'_blank'}>
        <Icon id="twitter" size={32} />
      </a>
      <a
        href={'https://www.youtube.com/channel/UCc4mtOUYEoZdrNzrJ5chaTg'}
        target={'_blank'}
      >
        <Icon id="youtube" size={32} />
      </a>
      <a href={'https://github.com/kloder-games'} target={'_blank'}>
        <Icon id="github" size={32} />
      </a>
      <a
        href={
          'https://play.google.com/store/apps/dev?id=7368457313230879486&hl=es'
        }
        target={'_blank'}
      >
        <Icon id="google-play" size={32} />
      </a>
      <a
        href={
          'https://www.amazon.es/Kloder-Games-Apps-Juegos/s?k=Kloder+Games&rh=n%3A1661649031'
        }
        target={'_blank'}
      >
        <Icon id="amazon" size={32} />
      </a>
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
  </StyledFooter>
);

export default injectIntl(Footer);
