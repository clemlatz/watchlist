import React from 'react';

import css from './Movie.css';

const movie= (props) => {
  return (
    <div className={css.Movie}>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <span onClick={props.onDeleteButtonClick}>(x)</span><br/>
      <input type="text" onChange={props.onInputChange} value={props.title} />
    </div>
  );
};

export default movie;
