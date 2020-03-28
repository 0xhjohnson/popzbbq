import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuCategories = ({ selected, handleChange }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuCategories {
            name
          }
        }
      }
    }
  `);
  const categories = data.site.siteMetadata.menuCategories;

  return (
    <ul className="flex mb-3 items-center justify-between sm:justify-center">
      {categories.map((category) => (
        <li key={category.name}>
          <button
            type="button"
            className={classNames(
              'btn',
              'mx-0',
              'sm:mx-4',
              'text-gray-900',
              'hover:border-gray-600',
              'hover:text-gray-600',
              'transition',
              'duration-150',
              'ease-in-out',
              {
                'border-gray-900': category.name === selected,
                'border-transparent': category.name !== selected
              }
            )}
            onClick={handleChange}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuCategories;

MenuCategories.propTypes = {
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
