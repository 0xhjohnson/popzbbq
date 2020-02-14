import React from 'react';
import { Heading, Text, Box } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" />
    <Box mx={[0, null, null, 4, 5]} mt={[0, null, null, 4]}>
      <Heading as="h1" my={2}>
        About
      </Heading>
      <Heading as="h3" my={3} sx={{ lineHeight: 'normal' }}>
        We provide South Georgia style BBQ that people love, day after day after
        day. It is not a big secret. People just want more of it.
      </Heading>
      <Text my={2}>
        Pop’z BBQ & Catering was developed with one thing in mind; to provide
        people with delicious, cooked to order South Georgia style BBQ. Creating
        a reputation for some of the best South Georgia style BBQ. Our menu has
        expanded over the years and now includes a large variety of options
        ranging from slow-cooked pulled pork to custom cut steaks.
      </Text>
      <Text mt={2} mb={3}>
        Pop’z BBQ can take care of all types of events including weddings.
        Whether your event is for 50 people or 1,500 I always provide the
        highest service possible and ensure everything goes extremely smooth. I
        provide Pop’z BBQ famous homemade BBQ sauce with every order. The sauce
        is my grandfather's recipe, passed down generations.
      </Text>
    </Box>
  </Layout>
);

export default About;
