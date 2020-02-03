import React from 'react';
import styled from 'styled-components';
import { changeLocale, injectIntl } from 'gatsby-plugin-intl';

import Button from '../Button';

const StyledLanguageSwitcher = styled.div`
  margin: 0px;
`;

const LanguageSwitcher = ({ intl }) => (
  <StyledLanguageSwitcher>
    {intl.locale === 'en' ? (
      <Button onClick={() => changeLocale('es')} type={'outline'}>
        ES
      </Button>
    ) : (
      <Button onClick={() => changeLocale('en')} type={'outline'}>
        EN
      </Button>
    )}
  </StyledLanguageSwitcher>
);

export default injectIntl(LanguageSwitcher);
