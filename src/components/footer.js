/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaYelp, FaFacebookF } from 'react-icons/fa';
import { find, propEq } from 'ramda';
import Img from 'gatsby-image';
import React from 'react';

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
    <footer sx={{ bg: 'gray.2', height: 48, display: 'flex' }}>
      <div sx={{ p: [null, 3], mr: 'auto' }}>
        <Img
          fixed={data.placeholderImage.childImageSharp.fixed}
          alt="Pop'z BBQ logo footer"
        />
        <p sx={{ fontSize: 0, color: 'gray.7' }}>
          © {new Date().getFullYear()}, POPZ BBQ & CATERING LLC
        </p>
      </div>
      <div sx={{ variant: 'styles.footerBlock' }}>
        <p
          sx={{
            m: 0,
            mb: 2,
            color: 'gray.7',
            fontWeight: 'semibold',
            fontSize: 0
          }}>
          Reviews
        </p>
        <ul sx={{ m: 0, p: 0 }}>
          <li
            sx={{
              variant: 'styles.footerListItem'
            }}>
            <a
              sx={{ variant: 'styles.footerLink' }}
              href="https://www.weddingwire.com/reviews/popz-bbq-catering-fort-myers/79b9a0461789af59.html">
              Wedding wire
            </a>
          </li>
          <li
            sx={{
              variant: 'styles.footerListItem'
            }}>
            <a
              sx={{ variant: 'styles.footerLink' }}
              href="https://www.facebook.com/pg/PopzBBQ/reviews">
              Facebook
            </a>
          </li>
          <li
            sx={{
              variant: 'styles.footerListItem'
            }}>
            <a
              sx={{ variant: 'styles.footerLink' }}
              href="https://bit.ly/31AEWpb">
              Google
            </a>
          </li>
          <li
            sx={{
              variant: 'styles.footerListItem'
            }}>
            <a
              sx={{ variant: 'styles.footerLink' }}
              href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers">
              Yelp
            </a>
          </li>
        </ul>
      </div>
      <div sx={{ variant: 'styles.footerBlock' }}>
        <p
          sx={{
            m: 0,
            mb: 2,
            color: 'gray.7',
            fontWeight: 'semibold',
            fontSize: 0
          }}>
          Contact
        </p>
        <ul sx={{ m: 0, p: 0 }}>
          <li
            key={bookEventLink.name}
            sx={{
              variant: 'styles.footerListItem'
            }}>
            <Link
              to={bookEventLink.link}
              sx={{
                variant: 'styles.footerLink'
              }}>
              {bookEventLink.name}
            </Link>
          </li>
          <li
            sx={{
              variant: 'styles.footerListItem'
            }}>
            <a
              sx={{ variant: 'styles.footerLink' }}
              href="mailto:popzbbq@embarqmail.com">
              Email
            </a>
          </li>
          <li
            sx={{
              variant: 'styles.footerListItem'
            }}>
            <a sx={{ variant: 'styles.footerLink' }} href="tel:239-823-0485">
              239-823-0485
            </a>
          </li>
        </ul>
      </div>
      <div sx={{ variant: 'styles.footerBlock' }}>
        <p
          sx={{
            m: 0,
            mb: 2,
            color: 'gray.7',
            fontWeight: 'semibold',
            fontSize: 0
          }}>
          Socials
        </p>
        <div sx={{ display: 'flex', marginLeft: '-0.5rem' }}>
          <a
            sx={{ variant: 'styles.footerLink' }}
            href="https://www.facebook.com/pg/PopzBBQ">
            <FaFacebookF sx={{ variant: 'styles.footerIcons' }} />
          </a>
          <a
            sx={{ variant: 'styles.footerLink' }}
            href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers">
            <FaYelp sx={{ variant: 'styles.footerIcons' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
