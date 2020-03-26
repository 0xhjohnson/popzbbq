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
    <footer className="bg-gray-200">
      <div className="grid grid-cols-2 sm:grid-cols-6">
        <div className="px-3 pt-3 sm:pb-3 row-span-1 sm:row-span-3">
          <Img
            fixed={data.placeholderImage.childImageSharp.fixed}
            alt="Pop'z BBQ logo footer"
          />
          <p className="text-gray-700 text-sm my-1">
            Enjoy unforgettable food &amp; service
          </p>
          <p className="text-gray-700 text-sm my-1">
            © {new Date().getFullYear()}, POPZ BBQ &amp; CATERING LLC
          </p>
        </div>
        <div className="py-3 px-3 sm:px-0 pb-0 sm:pb-3 row-span-1">
          <p className="text-gray-700 font-medium text-sm mb-1">Reviews</p>
          <ul>
            <li className="text-gray-700 text-sm pb-1">
              <a
                className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
                href="https://www.weddingwire.com/reviews/popz-bbq-catering-fort-myers/79b9a0461789af59.html"
              >
                Wedding wire
              </a>
            </li>
            <li className="text-gray-700 text-sm pb-1">
              <a
                className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
                href="https://www.facebook.com/pg/PopzBBQ/reviews"
              >
                Facebook
              </a>
            </li>
            <li className="text-gray-700 text-sm pb-1">
              <a
                className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
                href="https://bit.ly/31AEWpb"
              >
                Google
              </a>
            </li>
            <li className="text-gray-700 text-sm pb-1">
              <a
                className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
                href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers"
              >
                Yelp
              </a>
            </li>
          </ul>
        </div>
        <div className="row-span-1 sm:py-3 px-3 sm:px-0 pb-2 sm:pb-0">
          <p className="mb-1 text-gray-700 font-medium text-sm">Contact</p>
          <ul>
            <li className="text-gray-700 text-sm pb-1">
              <Link
                to={bookEventLink.link}
                className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
              >
                {bookEventLink.name}
              </Link>
            </li>
            <li className="text-gray-700 text-sm pb-1">
              <a
                className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
                href="mailto:popzbbq@embarqmail.com"
              >
                Email
              </a>
            </li>
            <li className="text-gray-700 text-sm pb-1">
              <a
                className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
                href="tel:239-823-0485"
              >
                239-823-0485
              </a>
            </li>
          </ul>
        </div>
        <div className="row-span-1 sm:py-3 px-3 sm:px-0 pb-2 sm:pb-0">
          <p className="mb-1 texy-gray-700 font-medium text-sm">Socials</p>
          <div className="flex -ml-2">
            <a
              className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
              href="https://www.facebook.com/pg/PopzBBQ"
            >
              <FaFacebookF className="text-gray-700 w-6 h-6" />
            </a>
            <a
              className="text-gray-700 no-underline transition duration-150 hover:text-gray-600"
              href="https://www.yelp.com/biz/popz-bbq-and-catering-fort-myers"
            >
              <FaYelp className="text-gray-700 w-6 h-6" />
            </a>
          </div>
        </div>
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
