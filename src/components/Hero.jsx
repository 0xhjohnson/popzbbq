/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Heading, Container, Box, Text, jsx } from 'theme-ui';

import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <>
      <Container mt={[4, 5, 6, 7]} px={2} mx="auto">
        <Box
          sx={{
            textAlign: [null, 'center', null, 'left']
          }}
        >
          <Heading
            as="h2"
            sx={{
              lineHeight: 'snug',
              fontWeight: 800,
              fontSize: '1.85em'
            }}
          >
            Bad to the Bone
            <br />
            <span sx={{ color: 'orange.6' }}>South Georgia Style BBQ</span>
          </Heading>
          <Text color="gray.7" mt={[2, 3]}>
            We provide South Georgia style BBQ that people love, day after day
            after day. It is not a big secret. People just want more of it.
          </Text>
          <Box
            sx={{
              mt: [2, 3],
              display: [null, 'flex'],
              justifyContent: [null, 'justify-center', null, 'justify-start']
            }}
          />
        </Box>
      </Container>
      <HeroImage />
    </>
  );
};

export default Hero;
