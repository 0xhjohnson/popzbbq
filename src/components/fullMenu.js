import React, { useState } from 'react';

import MenuCategories from './menuCategories';
import MenuItems from './menuItems';

const FullMenu = () => {
  const [category, setCategory] = useState('Starters');

  return (
    <>
      <MenuCategories
        selected={category}
        handleChange={(e) => setCategory(e.target.textContent)}
      />
      <MenuItems selected={category} />
    </>
  );
};

export default FullMenu;
