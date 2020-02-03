import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInner = styled.div`
  margin: 0 auto;
  padding: 32px 0;
  max-width: 960px;
  @media only screen and (max-width: 960px) {
    & {
      max-width: 80%;
    }
  }
`;
const StyledContainer = styled.div`
  ${props => (props.featured ? 'background-color: #ebebeb;' : '')}
`;

const Container = ({ children, featured }) => (
  <StyledContainer featured={featured}>
    <StyledInner>{children}</StyledInner>
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node,
  featured: PropTypes.bool,
};

export default Container;
