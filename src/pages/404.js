import React from 'react';
import { Heading, Text } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading as="h1">NOT FOUND</Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
);

export default NotFoundPage;
