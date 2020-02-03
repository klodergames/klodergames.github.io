import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

const StyledFeatures = styled.div`
  margin-bottom: 32px;
  h2 {
    color: var(--primary-color);
    margin-bottom: 8px;
  }
  ul {
    margin: 0;
    padding: 0 0 0 16px;
  }
`;

const Features = ({ features, intl }) => (
  <StyledFeatures>
    <h2>{intl.formatMessage({ id: 'Features' })}</h2>
    <ul>
      {features.map((x, idx) => (
        <li key={idx}>{x}</li>
      ))}
    </ul>
  </StyledFeatures>
);

Features.propTypes = {
  features: PropTypes.array,
};

export default injectIntl(Features);

