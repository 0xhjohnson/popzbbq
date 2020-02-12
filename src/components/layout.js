import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'theme-ui';
import 'normalize.css';

import Nav from './nav';
import Footer from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      <Container px={4} py={3}>
        <main>{children}</main>
      </Container>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
