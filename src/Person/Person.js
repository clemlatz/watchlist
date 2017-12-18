import React from 'react';

const person = (props) => {
  return (
    <p>
      My name is {props.name} and I'm {props.age} years old.{' '}
      <span onClick={props.onDeleteButtonClick}>(x)</span><br/>
      <input type="text" onChange={props.onInputChange} value={props.name} />
    </p>
  );
};

export default person;
