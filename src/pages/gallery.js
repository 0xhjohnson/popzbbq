import React from 'react';
import Img from 'gatsby-image';
import { Heading, Grid, Box } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Gallery = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 80) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Gallery" />
      <Heading as="h1" my={2}>
        Gallery
      </Heading>
      <Grid gap={3} columns={[null, 2, 3]} py={3}>
        {allFile.edges.map(({ node }) => (
          <Img key={node.id} fluid={node.childImageSharp.fluid} />
        ))}
      </Grid>
    </Layout>
  );
};

export default Gallery;
