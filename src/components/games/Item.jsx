import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

const StyledImage = styled.div`
  overflow: hidden;
  border-radious: 3px;
  ${props => !props.published ? css`
    img {
      filter: blur(2px) opacity(0.2);
    }
  ` : ''}
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
        {icon?.childImageSharp?.original?.src && <Img
          alt={title}
          fixed={icon.childImageSharp.fixed}
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
