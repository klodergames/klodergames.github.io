import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSlider from 'react-slick';
import { injectIntl } from 'gatsby-plugin-intl';

import '../../styles/slick.scss';

import Button from '../Button';

const StyledSlide = styled.div`
  height: 500px;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.bg});
`;

const StyledSlideContent = styled.div`
  height: 100%;
  display: grid;
  max-width: 720px;
  justify-items: center;
  align-content: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin: 0 auto;
  padding: 0 16px;
  h2 {
    text-transform: uppercase;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 56px;
    margin-bottom: 0px;
    margin-top: 16px;
  }
  p {
    text-transform: uppercase;
    font-size: 32px;
    line-height: 32px;
    margin: 0 0 32px;
  }
`;

const StyledSlider = styled.div`
  margin: 0px;
`;

const Slider = ({ games, intl }) => (
  <StyledSlider>
    <ReactSlider
      dots={true}
      arrows={false}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
    >
      {games.map((x, idx) => (
        <StyledSlide
          key={idx}
          bg={require(`../../../data/games/${x.slug}/bg.jpg`)}
        >
          <StyledSlideContent>
            <img
              src={require(`../../../data/games/${x.slug}/logo.png`)}
              alt={x.title}
            />
            <h2>{x.title}</h2>
            <p>{x.tagline}</p>
            <Button to={`/games/${x.slug}`}>
              {intl.formatMessage({ id: 'Go !' })}
            </Button>
          </StyledSlideContent>
        </StyledSlide>
      ))}
    </ReactSlider>
  </StyledSlider>
);

Slider.propTypes = {
  games: PropTypes.array,
};

export default injectIntl(Slider);
