/** @jsx jsx */
import { jsx } from 'theme-ui';
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
    <header
      sx={{
        bg: 'gray.9',
        display: 'flex',
        variant: 'styles.header'
      }}>
      <div
        sx={{
          display: 'flex',
          width: 'full',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3
        }}>
        <div
          sx={{
            width: '1/4',
            maxWidth: '109px',
            pr: 1
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
        </div>
        <nav>
          <ul
            sx={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              m: 0,
              py: 2
            }}>
            {menuLinks.map((link) => (
              <li
                key={link.name}
                sx={{
                  px: [null, 1, 2],
                  listStyleType: 'none',
                  '&:last-child': {
                    py: 1,
                    px: 2,
                    my: 'auto',
                    ml: [null, 1, 2, 4],
                    cursor: 'pointer',
                    fontSize: 0,
                    bg: 'gray.8',
                    fontWeight: 'semibold',
                    borderRadius: 'default',
                    maxHeight: '35px',
                    '&:hover': {
                      bg: 'gray.7',
                      transition:
                        'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)'
                    }
                  }
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
