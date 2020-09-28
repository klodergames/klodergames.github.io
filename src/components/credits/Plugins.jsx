import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import plugins from '../../../data/plugins';

const StyledPlugins = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  p {
    margin: 0;
  }
`;

const Plugins = ({ intl }) => (
  <StyledPlugins>
    {plugins.map(({ link, name, description }, idx) => (
      <div key={idx}>
        <a href={link} target={'_blank'} rel={'noopener noreferrer'}>
          {name}
        </a>
        <p>{description[intl.locale]}</p>
      </div>
    ))}
  </StyledPlugins>
);

export default injectIntl(Plugins);
