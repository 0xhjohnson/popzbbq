import React from 'react';
import Img from 'gatsby-image';
import { Heading, Grid } from 'theme-ui';
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

  const filenameToTitle = (title) => {
    const cleanTitle = title
      .split('.')[0]
      .split('-')
      .join(' ');

    return cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);
  };

  return (
    <Layout>
      <SEO title="Gallery" />
      <Heading as="h1" my={2}>
        Gallery
      </Heading>
      <Grid gap={3} columns={[null, 2, 3]} py={3}>
        {allFile.edges.map(({ node }) => (
          <Img
            key={node.id}
            fluid={node.childImageSharp.fluid}
            alt={filenameToTitle(node.childImageSharp.fluid.originalName)}
          />
        ))}
      </Grid>
    </Layout>
  );
};

export default Gallery;
