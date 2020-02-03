import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const typeBackgroundColor = {
  primary: 'var(--primary-color)',
  outline: 'transparent',
};

const typeBorder = {
  primary: '0px',
  outline: '2px solid var(--text-color)',
};

const typeColor = {
  primary: '#fff',
  outline: 'var(--text-color)',
};

const StyledButton = styled.div`
  a {
    padding: 8px 16px;
    border-radius: 10px;
    font-family: 'Quadrunde', sans-serif;
    font-size: 25px;
    color: ${props => typeColor[props.type]};
    text-decoration: none;
    background-color: ${props => typeBackgroundColor[props.type]};
    border: ${props => typeBorder[props.type]};
    cursor: pointer;
  }
`;

const Button = ({ type, children, to, onClick, target }) => (
  <StyledButton type={type}>
    {to ? (
      <Link to={to} target={target} onClick={onClick}>
        {children}
      </Link>
    ) : (
      <a onClick={onClick}>{children}</a>
    )}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.oneOf(['_blank', '_self']),
  type: PropTypes.oneOf(['primary', 'outline']),
};

Button.defaultProps = {
  target: '_self',
  children: 'Button',
  type: 'primary',
};

export default Button;
