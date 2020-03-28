import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaYelp, FaFacebookF } from 'react-icons/fa';
import { find, propEq } from 'ramda';
import Img from 'gatsby-image';
import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ menuLinks }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "popz-bbq-logo-home.png" }) {
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
    <footer className="bg-gray-800">
      <div className="px-4 lg:px-6">
        <div className="grid grid-cols-2 sm:gap-4 sm:grid-cols-5 mt-3 mb-6 sm:mt-12 sm:mr-6">
          <div className="sm:pb-3 sm:pr-4 md:pr-16 col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="my-6 sm:mt-1">
              <Img
                fixed={data.placeholderImage.childImageSharp.fixed}
                alt="Pop'z BBQ logo footer"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Providing cooked to order South Georgia style BBQ that is bad to
              the bone.
            </p>
            <div className="flex mb-8 -ml-1">
              <a
                className="no-underline p-1"
                href="https://www.facebook.com/pg/PopzBBQ"
              >
                <FaFacebookF className="w-5 h-5 text-gray-500 hover:text-gray-400 transition duration-150" />
              </a>
              <a
                className="no-underline p-1 ml-3"
                href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers"
              >
                <FaYelp className="w-5 h-5 text-gray-500 hover:text-gray-400 transition duration-150" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-sm tracking-wider font-medium mb-4">
              REVIEWS
            </p>
            <ul>
              <li className="mb-4">
                <a
                  className="text-gray-400 text-sm no-underline transition duration-150 hover:text-gray-300"
                  href="https://www.weddingwire.com/reviews/popz-bbq-catering-fort-myers/79b9a0461789af59.html"
                >
                  Wedding wire
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-gray-400 text-sm no-underline transition duration-150 hover:text-gray-300"
                  href="https://www.facebook.com/pg/PopzBBQ/reviews"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-gray-400 text-sm no-underline transition duration-150 hover:text-gray-300"
                  href="https://bit.ly/31AEWpb"
                >
                  Google
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-gray-400 text-sm no-underline transition duration-150 hover:text-gray-300"
                  href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers"
                >
                  Yelp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-gray-500 font-medium tracking-wider text-sm">
              CONTACT
            </p>
            <ul>
              <li className="mb-4">
                <Link
                  to={bookEventLink.link}
                  className="text-gray-400 text-sm no-underline transition duration-150 hover:text-gray-300"
                >
                  {bookEventLink.name}
                </Link>
              </li>
              <li className="mb-4">
                <a
                  className="text-gray-400 text-sm no-underline transition duration-150 hover:text-gray-300"
                  href="mailto:popzbbq@embarqmail.com"
                >
                  Email
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-gray-400 text-sm no-underline transition duration-150 hover:text-gray-300"
                  href="tel:239-823-0485"
                >
                  239-823-0485
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700" />
      </div>
      <div className="flex justify-start sm:justify-center">
        <p className="text-gray-500 text-sm px-4 sm:px-0 pt-6 pb-8">
          © {new Date().getFullYear()}, POPZ BBQ &amp; CATERING LLC
        </p>
      </div>
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
