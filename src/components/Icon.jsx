import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.i`
  font-size: ${props => props.size}px;
`;

const Icon = ({ id, size }) => (
  <StyledIcon size={size} className={`icon icon-${id}`} />
);

Icon.propTypes = {
  id: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 14,
};

export default Icon;
