import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FullMenu from '../components/FullMenu';
import Banner from '../components/Banner';

const Menu = () => (
  <Layout title="Menu">
    <SEO title="Menu" />
    <FullMenu />
    <Banner />
  </Layout>
);

export default Menu;
