import React from 'react';
import { Heading } from 'theme-ui';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FullMenu from '../components/FullMenu';

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <Heading as="h1" my={2}>
      Menu
    </Heading>
    <FullMenu />
  </Layout>
);

export default Menu;
