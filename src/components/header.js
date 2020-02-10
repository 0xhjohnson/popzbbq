/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Header = ({ menuLinks }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "popz-bbq-logo-home.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Flex
      as="header"
      px={[null, 2, 3, 4]}
      sx={{
        bg: 'gray.9',
        variant: 'styles.header',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <Box
        pr={1}
        sx={{
          width: '1/4',
          maxWidth: '109px'
        }}>
        <Link
          to="/"
          sx={{
            color: 'white',
            textDecoration: 'none'
          }}>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Pop'z BBQ logo"
          />
        </Link>
      </Box>
      <nav>
        <Flex
          as="ul"
          py={2}
          sx={{
            alignItems: 'center'
          }}>
          {menuLinks.map((link) => (
            <li
              key={link.name}
              sx={{
                variant: 'styles.navItems'
              }}>
              <Link
                to={link.link}
                activeStyle={{ color: 'white' }}
                sx={{
                  variant: 'styles.headerLink'
                }}>
                {link.name}
              </Link>
            </li>
          ))}
        </Flex>
      </nav>
    </Flex>
  );
};

export default Header;
