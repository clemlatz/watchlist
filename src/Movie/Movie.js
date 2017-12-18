import React from 'react';

const movie= (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Director: {props.director}</p>
      <span onClick={props.onDeleteButtonClick}>(x)</span><br/>
      <input type="text" onChange={props.onInputChange} value={props.title} />
    </div>
  );
};

export default movie;
