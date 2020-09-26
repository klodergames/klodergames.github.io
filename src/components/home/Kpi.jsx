import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.div`
  margin-bottom: 1rem;
  height: 64px;
  margin-top: 32px;
`;

const StyledKPI = styled.div`
  text-align: center;
  flex: 1 1 33.3333333333%;
`;

const KPI = ({ Icon, title, description }) => (
  <StyledKPI>
    <StyledIcon>
      <Icon size={'3em'} />
    </StyledIcon>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledKPI>
);

KPI.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default KPI;

