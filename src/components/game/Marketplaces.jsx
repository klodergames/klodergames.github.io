import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

import Icon from '../Icon';

const StyledMarketplaces = styled.div`
  margin-bottom: 32px;
  h2 {
    color: var(--primary-color);
    margin-bottom: 8px;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
    margin-right: 16px;
  }
`;

const markets = {
  google: 'google-play',
  amazon: 'amazon',
};

const getId = x => Object.keys(markets).find(y => x.includes(y));
const getIcon = x => markets[getId(x)];

const Marketplaces = ({ marketplaces, intl }) => (
  <StyledMarketplaces>
    <h2>{intl.formatMessage({ id: 'Avaiable On' })}</h2>
    {marketplaces.map((x, idx) => (
      <a href={x} target={'_blank'} key={idx}>
        <Icon id={getIcon(x)} size={32} />
      </a>
    ))}
  </StyledMarketplaces>
);

Marketplaces.propTypes = {
  marketplaces: PropTypes.array,
};

export default injectIntl(Marketplaces);
