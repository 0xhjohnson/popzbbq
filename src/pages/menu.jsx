import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FullMenu from '../components/FullMenu';

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <h1 className="my-2">Menu</h1>
    <FullMenu />
  </Layout>
);

export default Menu;
