/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, jsx } from 'theme-ui';
import 'normalize.css';

import Nav from './Nav';
import Footer from './Footer';

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
    <Flex sx={{ height: 'screenHeight', flexDirection: 'column' }}>
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      <Container px={[2, 4]} py={3} sx={{ flex: '1 1 0%' }}>
        <main>{children}</main>
      </Container>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
