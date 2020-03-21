/** @jsx jsx */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { jsx, Flex, Heading, Divider } from 'theme-ui';
import { nth } from 'ramda';

const MenuCategories = ({ selected }) => {
  // until useStaticQuery can accept arguments have to normalize
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuItems {
            Starters {
              title
              items
            }
            Meats_and_Seafood {
              title
              items
            }
            Sides {
              title
              items
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
    Sides: nth(2, allMenuItems).Sides,
  };
  const selectedMenuItems = normalized[selected];

  return (
    <>
      {selectedMenuItems.map((categories) => (
        <Flex px={[null, 1, 3, 6]} sx={{
          flexDirection: 'column'
        }} key={categories.title}>
          <Heading as="h3" my={2}>{categories.title}</Heading>
          <Divider mb={2} color="gray.6" />
          <ul>
            {
              categories.items.map((item) => (
                <li key={item} sx={{
                  listStyleType: 'none',
                  py: 1
                }}>{item}</li>
              ))
            }
          </ul>
        </Flex>
      ))}
    </>
  );
};

export default MenuCategories;
