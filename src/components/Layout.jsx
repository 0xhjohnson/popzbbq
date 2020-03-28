import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/style.css';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, fullWidth, title }) => {
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
      <div className="flex-1">
        <main>{children}</main>
      </div>
    );
  } else {
    mainContent = (
      <div className="px-2 sm:px-4 flex-1 justify-center">
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      {title && <Header title={title} />}
      {mainContent}
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  title: PropTypes.string
};

Layout.defaultProps = {
  fullWidth: false,
  title: ''
};

export default Layout;
