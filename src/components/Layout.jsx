/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, jsx } from 'theme-ui';
import 'normalize.css';

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
      <Container variant="mxContainer">
        <main>{children}</main>
      </Container>
    );
  } else {
    mainContent = (
      <Container px={[2, 4]} py={3} sx={{ flex: '1 1 0%' }}>
        <main>{children}</main>
      </Container>
    );
  }

  return (
    <Flex sx={{ height: 'screenHeight', flexDirection: 'column' }}>
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      {mainContent}
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </Flex>
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
