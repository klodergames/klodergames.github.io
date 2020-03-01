import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { CookiesProvider } from 'react-cookie';

import OverlayMenu from './layout/OverlayMenu.jsx';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Go2Top from './layout/Go2Top';
import Cookies from './layout/Cookies';

import '../styles/layout.scss';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [overlay, setOverlay] = useState(false);

  return (
    <CookiesProvider>
      <StyledLayout>
        <OverlayMenu
          visible={overlay}
          onClickOverlay={() => setOverlay(false)}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          onShowOverlay={() => setOverlay(true)}
        />
        {children}
        <Go2Top />
        <Cookies />
        <Footer siteTitle={data.site.siteMetadata.title} />
      </StyledLayout>
    </CookiesProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
