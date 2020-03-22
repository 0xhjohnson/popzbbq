import React, { useState } from 'react';

import MenuCategories from './MenuCategories';
import MenuItems from './MenuItems';

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
