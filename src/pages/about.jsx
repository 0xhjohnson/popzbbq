import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner';

const About = () => (
  <Layout title="About">
    <SEO title="About" />
    <div className="mt-8 mb-12 mx-auto max-w-3xl">
      <h3 className="mb-6 text-xl font-medium text-gray-700">
        We provide South Georgia style BBQ that people love, day after day after
        day. It is not a big secret. People just want more of it.
      </h3>
      <p className="mb-3 text-gray-900">
        Pop&apos;z BBQ &amp; Catering was developed with one thing in mind; to
        provide people with delicious, cooked to order South Georgia style BBQ.
        Creating a reputation for some of the best South Georgia style BBQ. Our
        menu has expanded over the years and now includes a large variety of
        options ranging from slow-cooked pulled pork to custom cut steaks.
      </p>
      <p className="text-gray-900">
        Pop&apos;z BBQ can take care of all types of events including weddings.
        Whether your event is for 50 people or 1,500 I always provide the
        highest service possible and ensure everything goes extremely smooth. I
        provide Pop’z BBQ famous homemade BBQ sauce with every order. The sauce
        is my grandfather&apos;s recipe, passed down generations.
      </p>
    </div>
  </Layout>
);

export default About;
