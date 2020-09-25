import React from 'react';
import styled from 'styled-components';
import { changeLocale, injectIntl } from 'gatsby-plugin-intl';

const StyledItem = styled.a`
  text-decoration: underline;
  color: var(--text-color);
  font-weight: bold;
  font-size: 80%;
`;
  
const Item = ({ lang, children }) => (
  <StyledItem href={'#'} onClick={(e) => {
    e.preventDefault();
    changeLocale(lang);
  }}>
    {children}
  </StyledItem>
);

const StyledList = styled.div`
  margin: 0px;
`;

const LanguageSwitcher = ({ intl }) => (
  <StyledList>
    {intl.locale === 'en' ? (
      <Item lang={'es'}>
        Versión en español
      </Item>
    ) : (
      <Item lang={'en'}>
        English version
      </Item>
    )}
  </StyledList>
);

export default injectIntl(LanguageSwitcher);
