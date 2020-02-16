/** @jsx jsx */
import React from 'react';
import { jsx, Flex, Button } from 'theme-ui';

const MenuCategories = ({ categories, selected, handleChange }) => {
  return (
    <Flex
      as="ul"
      py={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      {categories.map((category) => (
        <li
          key={category.name}
          sx={{
            px: [null, 1, 2],
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
