import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

import kpis from '../../../data/kpis';
import Kpi from './Kpi';

const StyledKpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem 2rem;
`;

const KpiGrid = ({ intl }) => (
  <StyledKpiGrid>
    {kpis.map((x, idx) => (
      <Kpi
        key={idx}
        Icon={x.icon}
        title={x.title[intl.locale]}
        description={x.description[intl.locale]}
      />
    ))}
  </StyledKpiGrid>
);

KpiGrid.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(KpiGrid);
