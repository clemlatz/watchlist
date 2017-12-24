import React from 'react';

import WithClass from '../../../hoc/WithClass';

import css from './Movie.css';

const movie= (props) => {
  if (typeof props.title === 'undefined') {
    throw new Error('Cannot render Movie without a title');
  }
  return (
    <WithClass classes={css.Movie}>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <span onClick={props.onDeleteButtonClick}>(x)</span><br/>
      <input type="text" onChange={props.onInputChange} value={props.title} />
    </WithClass>
  );
};

export default movie;
