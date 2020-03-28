import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
    <Layout title="Gallery">
      <SEO title="Gallery" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-3">
        {allFile.edges.map(({ node }) => (
          <Img
            key={node.id}
            fluid={node.childImageSharp.fluid}
            alt={filenameToTitle(node.childImageSharp.fluid.originalName)}
            className="rounded-sm"
          />
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
