import React, { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    let newInputByUser = event.target.value;
    setInputValue( newInputByUser )
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text' 
        placeholder={'Find your favorite gif'} 
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};

