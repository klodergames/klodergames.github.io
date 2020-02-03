import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const StyledPlugins = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  p {
    margin: 0;
  }
`;

const Plugins = ({ intl }) => {
  const data = require(`../../../data/static/plugins.${intl.locale}.yaml`);
  return (
    <StyledPlugins>
      {data.map((x, idx) => (
        <div key={idx}>
          <a href={x.link} target={'_blank'}>
            {x.name}
          </a>
          <p>{x.description}</p>
        </div>
      ))}
    </StyledPlugins>
  );
};

export default injectIntl(Plugins);
