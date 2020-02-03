import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTags = styled.div`
  color: white;
  background-color: var(--text-color);
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 80%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  text-transform: capitalize;
`;

const Tags = ({ tags }) => (
  <StyledTags>
    {tags.split(',').map((x, idx) => (
      <span key={idx}>{x}</span>
    ))}
  </StyledTags>
);

Tags.propTypes = {
  tags: PropTypes.string,
};

export default Tags;
