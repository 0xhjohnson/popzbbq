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
  const mobileMenuClasses = classNames('px-2', 'pt-2', 'pb-3', 'sm:hidden', {
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
            aria-expanded={isOpen}
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
          <ul className="flex items-center py-2 ml-6">
            {menuLinks.map((link, idx) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  activeClassName="nav-active"
                  className={classNames(
                    'nav-link',
                    'text-sm',
                    'hover:text-white',
                    'hover:bg-gray-700',
                    'focus:outline-none',
                    'focus:text-white',
                    'focus:bg-gray-700',
                    { 'ml-4': idx > 0 }
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* mobile menu dropdown */}
      <nav className={mobileMenuClasses}>
        <ul>
          {menuLinks.map((link, idx) => (
            <li key={link.name}>
              <Link
                to={link.link}
                activeClassName="nav-active"
                className={classNames(
                  'nav-link',
                  'hover:text-white',
                  'hover:bg-gray-700',
                  'focus:outline-none',
                  'focus:text-white',
                  'focus:bg-gray-700',
                  { 'mt-1': idx > 0 }
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
