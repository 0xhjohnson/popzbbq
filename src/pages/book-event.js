import React from 'react';
import { Heading } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BookEvent = () => (
  <Layout>
    <SEO title="Book an event" />
    <Heading as="h1">Book an Event</Heading>
  </Layout>
);

export default BookEvent;
