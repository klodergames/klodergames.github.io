import React from 'react';
import styled from 'styled-components';
import { changeLocale, injectIntl } from 'gatsby-plugin-intl';

const Item = ({ lang, children }) => (
  <a href={'#'} onClick={(e) => {
    e.preventDefault();
    changeLocale(lang);
  }}>
    {children}
  </a>
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
