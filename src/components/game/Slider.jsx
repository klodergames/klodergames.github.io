import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSlider from 'react-slick';

import '../../styles/slick.scss';

const StyledSlider = styled.div`
  background-image: url(${props => props.bg});
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-color: transparent;
  padding: 60px 0;
`;

const StyledImage = styled.img``;

const orientationMap = {
  landscape: { w: 960, h: 540 },
  portrait: { w: 306, h: 540 },
};

const StyledContainer = styled.div`
  max-width: ${props => orientationMap[props.orientation].w}px;
  max-height: ${props => orientationMap[props.orientation].h}px;
  margin: 0 auto;
  box-shadow: black 0px 0px 5px;
  .iframe-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.26%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 940px) {
    & {
      margin: 0 16px;
    }
  }
`;

const Slider = ({ orientation, slug, youtube, images }) => (
  <StyledSlider bg={require(`../../../data/games/${slug}/bg.jpg`)}>
    <StyledContainer orientation={orientation}>
      <ReactSlider
        dots={true}
        arrows={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        //autoplay={true}
      >
        {youtube ? (
          <div className={'iframe-container'}>
            <iframe
              title="Promo Video"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtube}?rel=0&amp;showinfo=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="1"
            ></iframe>
          </div>
        ) : (
          ''
        )}
        {images.map((x, idx) => (
          <StyledImage
            key={idx}
            src={require(`../../../data/games/${slug}/${x}`)}
          />
        ))}
      </ReactSlider>
    </StyledContainer>
  </StyledSlider>
);

Slider.propTypes = {
  images: PropTypes.array,
  slug: PropTypes.string,
};

export default Slider;
