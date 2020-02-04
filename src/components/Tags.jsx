import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTags = styled.div`
  font-size: 80%;
  font-weight: 700;
  vertical-align: baseline;
  span {
    text-align: center;
    padding: 0.25em 0.4em;
    color: white;
    background-color: var(--text-color);
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    border-radius: 0.25em;
    text-transform: capitalize;
    margin-right: 8px;
  }
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
