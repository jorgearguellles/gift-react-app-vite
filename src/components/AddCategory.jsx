import React, { useState } from 'react'

export const AddCategory = ( props ) => {
  const { onNewCategory } = props;

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    let newInputByUser = event.target.value;
    setInputValue( newInputByUser )
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 2 ) return;
    onNewCategory( inputValue.trim() )
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

