/** @jsx jsx */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { jsx, Flex, Button } from 'theme-ui';

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
    <Flex
      as="ul"
      py={2}
      sx={{
        alignItems: 'center',
        justifyContent: ['space-between', 'center']
      }}>
      {categories.map((category) => (
        <li
          key={category.name}
          sx={{
            px: [0, 1, 2, 3],
            listStyleType: 'none'
          }}>
          <Button
            variant={category.name === selected ? 'outline' : 'minimal'}
            onClick={handleChange}>
            {category.name}
          </Button>
        </li>
      ))}
    </Flex>
  );
};

export default MenuCategories;
