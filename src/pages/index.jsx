import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Feature from '../components/Feature';

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <Hero />
    <Feature />
  </Layout>
);

export default IndexPage;
