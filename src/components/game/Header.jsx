import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Tags from '../Tags';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 82px auto;
  grid-gap: 16px;
  align-items: top;
  margin-bottom: 32px;
  .gatsby-image-wrapper {
    width: 100%;
  }
  h2,
  h4 {
    margin: 0;
  }
`;

const Header = ({ slug, title, date, tagline, categories, icon }) => (
  <StyledHeader>
    <Img
      alt={title}
      fixed={icon.childImageSharp.fixed}
      width={82}
      height={82}
    />
    <div>
      <Tags tags={[categories, date.substr(0, 4)].join(',')} />
      <h2>{title}</h2>
      <h4>{tagline}</h4>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  tagline: PropTypes.string,
  categories: PropTypes.any,
  icon: PropTypes.object,
};

export default Header;
