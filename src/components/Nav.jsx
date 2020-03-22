/** @jsx jsx */
import { jsx, Flex, Box, MenuButton, Close } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const Nav = ({ menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <Flex
        px={[2, 3, 4]}
        sx={{
          bg: 'gray.9',
          variant: 'styles.header',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          pr={1}
          sx={{
            width: '1/4',
            maxWidth: '109px'
          }}
        >
          <Link
            to="/"
            sx={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Pop'z BBQ logo"
            />
          </Link>
        </Box>
        {/* classic hamburger/close for phone screens */}
        <MenuButton
          aria-label="Open Menu"
          sx={{
            display: isOpen ? 'none' : 'block',
            '@media screen and (min-width: 640px)': {
              display: 'none'
            }
          }}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Close
          aria-label="Close Menu"
          sx={{
            display: isOpen ? 'block' : 'none',
            '@media screen and (min-width: 640px)': {
              display: 'none'
            }
          }}
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* full size menu for devices except phones */}
        <nav
          sx={{
            display: ['none', 'block']
          }}
        >
          <Flex
            as="ul"
            py={2}
            sx={{
              alignItems: 'center'
            }}
          >
            {menuLinks.map((link) => (
              <li
                key={link.name}
                sx={{
                  variant: 'styles.navItems'
                }}
              >
                <Link
                  to={link.link}
                  activeStyle={{ color: 'white' }}
                  sx={{
                    variant: 'styles.headerLink'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </Flex>
        </nav>
      </Flex>
      {/* mobile menu dropdown */}
      <div
        sx={{
          pt: 1,
          px: 2,
          pb: 2,
          display: isOpen ? 'block' : 'none',
          bg: 'gray.9',
          '@media screen and (min-width: 640px)': {
            display: 'none'
          }
        }}
      >
        <nav>
          <ul
            py={2}
            sx={{
              listStyleType: 'none'
            }}
          >
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  activeStyle={{ color: 'white' }}
                  sx={{
                    variant: 'styles.mobileHeaderLink'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;

Nav.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};
