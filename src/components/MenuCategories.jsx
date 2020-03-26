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
    <ul className="flex py-2 items-center justify-between sm:justify-center">
      {categories.map((category) => (
        <li key={category.name} className="px-0 sm:px-1 md:px-2 lg:px-3">
          <button
            type="button"
            className={classNames('btn', {
              'border-gray-700': category.name === selected,
              'border-transparent': category.name !== selected
            })}
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
