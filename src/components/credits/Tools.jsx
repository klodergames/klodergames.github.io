import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

const StyledTool = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-gap: 16px;
  justify-content: center;
  text-align: left;
  h3,
  p {
    margin: 0;
  }
`;

const StyledTools = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const Tool = ({ icon, name, description, link }) => (
  <StyledTool>
    <a href={link} target={'_blank'}>
      <img
        src={require(`../../images/tools/${icon}.png`)}
        alt={name}
        width="64"
        height="64"
      />
    </a>
    <div>
      <h3>
        <a href={link} target={'_blank'}>
          {name}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  </StyledTool>
);

const Tools = ({ intl }) => {
  const data = require(`../../../data/static/tools.${intl.locale}.yaml`);
  return (
    <StyledTools>
      {data.map((x, idx) => (
        <Tool
          key={idx}
          icon={x.id}
          name={x.name}
          description={x.description}
          link={x.link}
        />
      ))}
    </StyledTools>
  );
};

export default injectIntl(Tools);
