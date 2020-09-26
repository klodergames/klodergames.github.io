import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 32px;
  grid-auto-flow: dense;
  justify-content: center;
  justify-items: center;
  margin-bottom: 2rem;
`;

const Grid = ({ games }) => (
  <StyledGrid>
    {games.map((x, idx) => (
      <Item {...x} key={idx} />
    ))}
  </StyledGrid>
);

Grid.propTypes = {
  games: PropTypes.array,
};

export default Grid;
