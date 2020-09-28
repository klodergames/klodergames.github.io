import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import data from '../../../data/tools';

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

const Tool = ({ img, name, description, link }) => (
  <StyledTool>
    <a href={link} target={'_blank'} rel={'noopener noreferrer'}>
      <Img
        fixed={img}
        alt={name}
        width="64"
        height="64"
      />
    </a>
    <div>
      <h3>
        <a href={link} target={'_blank'} rel={'noopener noreferrer'}>
          {name}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  </StyledTool>
);

const Tools = ({ intl }) => {
  const { tools: { edges } } = useStaticQuery(graphql`
    query {
      tools: allFile(filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/tools/" }
      }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 64, height: 64, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
            relativePath
          }
        }
      }
    }
  `);
  return (
    <StyledTools>
      {data.map((tool)=> {
        const image = edges.find(img => img.node.relativePath.includes(tool.id));
        return { ...tool, img: image.node.childImageSharp.fixed };
      }).map(({ id, name, description, link, img}, idx) => (
        <Tool
          key={idx}
          img={img}
          name={name}
          description={description[intl.locale]}
          link={link}
        />
      ))}
    </StyledTools>
  );
};

export default injectIntl(Tools);
