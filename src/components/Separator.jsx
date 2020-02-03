import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.div`
  h2 {
    text-align: center;
  }
  div {
    width: 30px;
    height: 3px;
    background-color: #911;
    margin: 0 auto 60px auto;
  }
`;

const Separator = ({ title }) => (
  <StyledSeparator>
    <h2>{title}</h2>
    <div />
  </StyledSeparator>
);

export default Separator;

