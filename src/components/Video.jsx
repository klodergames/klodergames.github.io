import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.26%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Video = ({ youtube }) => (
  <StyledContainer>
    <StyledIframe
      title="Promo Video"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${youtube}?rel=0&amp;showinfo=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen="1"
    ></StyledIframe>
  </StyledContainer>
);

Video.propTypes = {
  youtube: PropTypes.string,
};

export default Video;
