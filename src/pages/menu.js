import React from 'react';
import { Heading } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FullMenu from '../components/fullMenu';

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <Heading as="h1">Menu</Heading>
    <FullMenu />
  </Layout>
);

export default Menu;
