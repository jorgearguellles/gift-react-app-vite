import React, { useState } from 'react'

export const AddCategory = ( props ) => {
  const { setCategories } = props;

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    let newInputByUser = event.target.value;
    setInputValue( newInputByUser )
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 3 ) return;
    setCategories( (categories) => [inputValue, ...categories]); // callback to get categories
    setInputValue( '' )
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type='text' 
        placeholder={ 'Find your favorite gif' } 
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};

