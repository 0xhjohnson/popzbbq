import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/style.css';

import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children, fullWidth }) => {
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

  let mainContent;
  if (fullWidth) {
    mainContent = (
      <div className="container-xl flex-1">
        <main>{children}</main>
      </div>
    );
  } else {
    mainContent = (
      <div className="px-2 sm:px-4 py-3 flex-1">
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      {mainContent}
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool
};

Layout.defaultProps = {
  fullWidth: false
};

export default Layout;
