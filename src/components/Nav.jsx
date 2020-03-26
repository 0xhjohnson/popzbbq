import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Nav = ({ menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "popz-bbq-logo-home.png" }) {
        childImageSharp {
          fixed(width: 100, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const hamburgerIconClasses = classNames({
    hidden: isOpen,
    'inline-flex': !isOpen
  });
  const closeIconClasses = classNames({
    'inline-flex': isOpen,
    hidden: !isOpen
  });
  const mobileMenuClasses = classNames('sm:hidden', {
    hidden: !isOpen,
    block: isOpen
  });

  return (
    <div className="bg-gray-800">
      <div className="flex px-2 py-1 sm:px-3 md:px-4 justify-between sm:justify-start items-center">
        <div className="p-1 mr-2">
          <Link to="/" className="text-white no-underline block">
            <Img
              fixed={data.placeholderImage.childImageSharp.fixed}
              alt="Pop'z BBQ logo"
            />
          </Link>
        </div>
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={hamburgerIconClasses}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={closeIconClasses}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* full size menu for devices except phones */}
        <nav className="hidden sm:block">
          <ul className="flex items-center py-2">
            {menuLinks.map((link) => (
              <li key={link.name} className="ml-8">
                <Link
                  to={link.link}
                  className="block text-gray-400 transition duration-150 hover:text-gray-200"
                  activeStyle={{ color: 'white' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* mobile menu dropdown */}
      <div className={mobileMenuClasses}>
        <nav>
          <ul>
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  activeStyle={{ color: 'white' }}
                  className="py-1 px-2 text-gray-400 no-underline rounded-md transition duration-150 hover:bg-gray-800 hover:text-gray-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
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
