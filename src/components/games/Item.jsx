import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import styled, { css } from 'styled-components';

const StyledImage = styled.div`
  overflow: hidden;
  border-radious: 3px;
  ${props =>
    !props.published
      ? css`
          img {
            filter: grayscale(1);
          }
        `
      : ''}
`;

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;

const StyledDescription = styled.div`
  text-align: center;
`;

const StyledItem = styled.div`
  width: 200px;
`;

const Item = ({ published, slug, title, tagline, icon }) => (
  <StyledItem>
    <StyledImage published={published}>
      <Link to={`/games/${slug}`}>
        {icon?.childImageSharp?.original?.src && <img
          alt={title}
          src={icon.childImageSharp.original.src}
          width={200}
          height={200}
        />}
      </Link>
    </StyledImage>
    <StyledTitle>{title}</StyledTitle>
    <StyledDescription>{tagline}</StyledDescription>
  </StyledItem>
);

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,
};

export default Item;
