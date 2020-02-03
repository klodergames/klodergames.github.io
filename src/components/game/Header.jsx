import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tags from '../Tags';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 82px auto;
  grid-gap: 16px;
  align-items: top;
  margin-bottom: 32px;
  img {
    width: 100%;
  }
  h2,
  h4 {
    margin: 0;
  }
`;

const Header = ({ slug, title, tagline, categories }) => (
  <StyledHeader>
    <img src={require(`../../../data/games/${slug}/icon.png`)} />
    <div>
      <Tags tags={categories} />
      <h2>{title}</h2>
      <h4>{tagline}</h4>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default Header;
