/** @jsx jsx */
import { jsx, Box, Text, Flex, Grid } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaYelp, FaFacebookF } from 'react-icons/fa';
import { find, propEq } from 'ramda';
import Img from 'gatsby-image';
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const Footer = ({ menuLinks }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "popz-bbq-logo-footer.png" }) {
        childImageSharp {
          fixed(width: 100, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const bookEventLink = find(propEq('name', 'Book an Event'))(menuLinks);

  return (
    <footer sx={{ bg: 'gray.2' }}>
      <Grid columns={[2, 6]}>
        <Box
          px={3}
          pt={3}
          pb={[0, 3]}
          sx={{
            gridColumn: ['span 1 / span 1', 'span 3 / span 3']
          }}
        >
          <Img
            fixed={data.placeholderImage.childImageSharp.fixed}
            alt="Pop'z BBQ logo footer"
          />
          <Text sx={{ fontSize: 0, color: 'gray.7', my: 1 }}>
            Enjoy unforgettable food &amp; service
          </Text>
          <Text sx={{ fontSize: 0, color: 'gray.7', my: 1 }}>
            © {new Date().getFullYear()}, POPZ BBQ &amp; CATERING LLC
          </Text>
        </Box>
        <Box
          sx={{
            variant: 'styles.footerBlock',
            py: 3,
            px: [3, 0],
            pb: [0, 3]
          }}
        >
          <Text variant="footerSubheading">Reviews</Text>
          <ul>
            <li
              sx={{
                variant: 'styles.footerListItem'
              }}
            >
              <a
                sx={{ variant: 'styles.footerLink' }}
                href="https://www.weddingwire.com/reviews/popz-bbq-catering-fort-myers/79b9a0461789af59.html"
              >
                Wedding wire
              </a>
            </li>
            <li
              sx={{
                variant: 'styles.footerListItem'
              }}
            >
              <a
                sx={{ variant: 'styles.footerLink' }}
                href="https://www.facebook.com/pg/PopzBBQ/reviews"
              >
                Facebook
              </a>
            </li>
            <li
              sx={{
                variant: 'styles.footerListItem'
              }}
            >
              <a
                sx={{ variant: 'styles.footerLink' }}
                href="https://bit.ly/31AEWpb"
              >
                Google
              </a>
            </li>
            <li
              sx={{
                variant: 'styles.footerListItem'
              }}
            >
              <a
                sx={{ variant: 'styles.footerLink' }}
                href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers"
              >
                Yelp
              </a>
            </li>
          </ul>
        </Box>
        <Box
          sx={{
            variant: 'styles.footerBlock',
            py: [0, 3],
            px: [3, 0],
            pb: [2, 0]
          }}
        >
          <Text variant="footerSubheading">Contact</Text>
          <ul>
            <li
              key={bookEventLink.name}
              sx={{
                variant: 'styles.footerListItem'
              }}
            >
              <Link
                to={bookEventLink.link}
                sx={{
                  variant: 'styles.footerLink'
                }}
              >
                {bookEventLink.name}
              </Link>
            </li>
            <li
              sx={{
                variant: 'styles.footerListItem'
              }}
            >
              <a
                sx={{ variant: 'styles.footerLink' }}
                href="mailto:popzbbq@embarqmail.com"
              >
                Email
              </a>
            </li>
            <li
              sx={{
                variant: 'styles.footerListItem'
              }}
            >
              <a sx={{ variant: 'styles.footerLink' }} href="tel:239-823-0485">
                239-823-0485
              </a>
            </li>
          </ul>
        </Box>
        <Box
          sx={{
            variant: 'styles.footerBlock',
            py: [0, 3],
            px: [3, 0],
            pb: [2, 0]
          }}
        >
          <Text variant="footerSubheading">Socials</Text>
          <Flex sx={{ marginLeft: '-0.5rem' }}>
            <a
              sx={{ variant: 'styles.footerLink' }}
              href="https://www.facebook.com/pg/PopzBBQ"
            >
              <FaFacebookF sx={{ variant: 'styles.footerIcons' }} />
            </a>
            <a
              sx={{ variant: 'styles.footerLink' }}
              href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers"
            >
              <FaYelp sx={{ variant: 'styles.footerIcons' }} />
            </a>
          </Flex>
        </Box>
      </Grid>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};
