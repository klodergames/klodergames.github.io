import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.div`
  margin-bottom: 32px;
  text-align: center;
  p,
  h3 {
    margin: 0;
  }
`;

const Question = ({ question, answer }) => (
  <StyledQuestion>
    <h3>{question}</h3>
    <p>{answer}</p>
  </StyledQuestion>
);

export default Question;
