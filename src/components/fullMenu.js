import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MenuCategories from './menuCategories';

const FullMenu = () => {
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

  const [category, setCategory] = useState('Starters');

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <MenuCategories
      categories={data.site.siteMetadata.menuCategories}
      selected={category}
      handleChange={(e) => setCategory(e.target.textContent)}
    />
  );
};

export default FullMenu;
