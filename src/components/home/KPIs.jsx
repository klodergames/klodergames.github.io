import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

const StyledIcon = styled.div`
  margin-bottom: 1rem;
  height: 64px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledKPI = styled.div`
  text-align: center;
  flex: 1 1 33.3333333333%;
`;

const StyledKPIs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem 2rem;
`;

const KPI = ({ icon, title, description }) => (
  <StyledKPI>
    <StyledIcon>
      <img alt={title} src={icon} />
    </StyledIcon>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledKPI>
);

const KPIs = ({ intl }) => {
  const data = require(`../../../data/static/kpis.${intl.locale}.yaml`);
  return (
    <StyledKPIs>
      {data.map((x, idx) => (
        <KPI
          key={idx}
          icon={require(`../../images/kpis/${x.id}.png`)}
          title={x.title}
          description={x.description}
        />
      ))}
    </StyledKPIs>
  );
};

KPI.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

KPIs.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(KPIs);
