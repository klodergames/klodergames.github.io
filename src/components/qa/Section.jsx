import React from 'react';
import styled from 'styled-components';
import Separator from '../Separator';
import Question from './Question';

const StyledSection = styled.div``;

const Section = ({ section }) => (
  <StyledSection>
    <Separator title={section.name} />
    {section.questions.map((x, idx) => (
      <Question {...x} key={idx} />
    ))}
  </StyledSection>
);

export default Section;

