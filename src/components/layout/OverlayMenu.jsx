import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import Button from '../Button';

const StyledMenu = styled.div`
  margin: auto;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 16px;
`;

const StyledOverlayMenu = styled.div`
  display: ${props => (props.visible ? 'grid' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
`;

const OverlayMenu = ({ intl, visible, onClickOverlay }) => (
  <StyledOverlayMenu visible={visible} onClick={() => onClickOverlay()}>
    <StyledMenu>
      <Button to="/">{intl.formatMessage({ id: 'Start' })}</Button>
      <Button to="/games">{intl.formatMessage({ id: 'Games' })}</Button>
      <Button to="/credits">{intl.formatMessage({ id: 'Credits' })}</Button>
      <Button to="/qa">{intl.formatMessage({ id: 'Q&A' })}</Button>
    </StyledMenu>
  </StyledOverlayMenu>
);

OverlayMenu.propTypes = {
  intl: PropTypes.object,
  onClickOverlay: PropTypes.func,
  visible: PropTypes.bool,
};

export default injectIntl(OverlayMenu);

