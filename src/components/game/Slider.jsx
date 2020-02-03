import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSlider from 'react-slick';

import Video from '../Video';

import '../../styles/slick.scss';

const StyledSlider = styled.div`
  background-image: url(${props => props.bg});
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-color: transparent;
  padding: 60px 0;
  @media only screen and (max-width: 600px) {
    & {
      padding: 32px 0;
    }
  }
`;

const StyledContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  @media only screen and (max-width: 940px) {
    & {
      margin: 0 16px;
    }
  }
`;

const StyledComposition = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.26%;
`;

const StyledImage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: auto;
  height: 100%;

  img {
    margin-left: -50%;
    width: auto;
    height: 100%;
    z-index: 1;
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(0.3);
  box-shadow: inset 0 0 100px black;
  z-index: -1;
`;

const Slider = ({ slug, youtube, images }) => (
  <StyledSlider bg={require(`../../../data/games/${slug}/bg.jpg`)}>
    <StyledContainer>
      <ReactSlider
        dots={true}
        arrows={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        //autoplay={true}
      >
        {youtube ? <Video youtube={youtube} /> : ''}
        {images
          .map(x => require(`../../../data/games/${slug}/${x}`))
          .map((x, idx) => (
            <StyledComposition key={idx}>
              <StyledBackground image={x} />
              <StyledImage>
                <img src={x} />
              </StyledImage>
            </StyledComposition>
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
