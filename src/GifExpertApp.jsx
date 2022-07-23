import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/**
 *  GifExpertApp structure
 *    1. title
 *    2. Input to Search 
 *    3. GiftsResults
 *      3.1 GiftItem
 */


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Pokemon']);

  const onAddCategory = ( newCategoryByInputUser ) => {
    const categoriesLowerCase = categories.map( category => category.toLowerCase() );
    if( categoriesLowerCase.includes(newCategoryByInputUser.toLowerCase()) ) return;
    setCategories([newCategoryByInputUser, ...categories]);
  };

  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={ (value)=> onAddCategory(value) }
      />
      {
        categories.map( category => (
            <GifGrid key={ category } category={ category }/>
        ))
      }
    </>
  );
};
