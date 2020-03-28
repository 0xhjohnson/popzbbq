import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <SEO title="404: Not found" />
    <div className="m-0 lg:m-4 xl:m-5 mt-0 lg:mt-4">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
