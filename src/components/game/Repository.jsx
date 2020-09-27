import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FaGithub } from 'react-icons/fa';


const StyledRepository = styled.div`
  margin-bottom: 32px;
  h2 {
    color: var(--primary-color);
    margin-bottom: 8px;
  }
`;

const Repository = ({ github }) => (
  <StyledRepository>
    <h2>
      <FormattedMessage id={'Repository'} />
    </h2>
    <p>
      <a href={github} target={'_blank'} rel={'noopener noreferrer'}>
        <FaGithub /> {github.substr(19)}
      </a>
    </p>
  </StyledRepository>
);

Repository.propTypes = {
  github: PropTypes.string,
};

export default Repository;
