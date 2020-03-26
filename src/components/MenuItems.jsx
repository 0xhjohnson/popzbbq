import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { nth } from 'ramda';
import PropTypes from 'prop-types';

const MenuItems = ({ selected }) => {
  // until useStaticQuery can accept arguments have to normalize
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuItems {
            Starters {
              title
              items {
                name
                info
              }
            }
            Meats_and_Seafood {
              title
              items {
                name
                info
              }
            }
            Sides {
              title
              items {
                name
                info
              }
            }
          }
        }
      }
    }
  `);

  const allMenuItems = data.site.siteMetadata.menuItems;

  const normalized = {
    Starters: nth(0, allMenuItems).Starters,
    'Meats and Seafood': nth(1, allMenuItems).Meats_and_Seafood,
    Sides: nth(2, allMenuItems).Sides
  };
  const selectedMenuItems = normalized[selected];

  return (
    <>
      {selectedMenuItems.map((categories) => (
        <div
          className="flex flex-col sm:px-1 md:px-3 lg:px-6"
          key={categories.title}
        >
          <h3 className="my-2">{categories.title}</h3>
          <hr className="my-2 border-b border-gray-600" />
          <ul>
            {categories.items.map((item) => (
              <li key={item.name} className="py-1 sm:py-2">
                {item.name}
                <p className="text-sm text-gray-700">{item.info}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MenuItems;

MenuItems.propTypes = {
  selected: PropTypes.string.isRequired
};
