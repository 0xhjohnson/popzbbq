import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <Hero />
  </Layout>
);

export default IndexPage;
