import React, { useState } from 'react';

import MenuCategories from './MenuCategories';
import MenuItems from './MenuItems';

const FullMenu = () => {
  const [category, setCategory] = useState('Starters');

  return (
    <div className="mt-8 mb-12 max-w-5xl mx-auto">
      <MenuCategories
        selected={category}
        handleChange={(e) => setCategory(e.target.textContent)}
      />
      <MenuItems selected={category} />
    </div>
  );
};

export default FullMenu;
