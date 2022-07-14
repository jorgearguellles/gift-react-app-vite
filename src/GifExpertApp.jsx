import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

/**
 *  GifExpertApp structure
 *    1. title
 *    2. Input to Search 
 *    3. GiftsResults
 *      3.1 GiftItem
 */


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Pokemon', 'Batman']);

  const onAddCategory = (event) => {
    const newCategoryByInputUser = event.target.value;
    setCategories([newCategoryByInputUser, ...categories]);
  };

  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory  
        setCategories={ setCategories } 
      />
      <ol>
        {
          categories.map( category => {
            return (
              <li key={category}>
                {category}
              </li>
            )
          })
        }
      </ol>
    </>
  );
};
