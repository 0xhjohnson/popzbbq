import React from 'react';
import { Link } from 'gatsby';
import { Heading, Text } from 'theme-ui';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h1">Hi people</Heading>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
