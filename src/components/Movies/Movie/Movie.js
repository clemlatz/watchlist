import React from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';

import css from './Movie.css';

const Movie = (props) => {
  if (typeof props.title === 'undefined') {
    throw new Error('Cannot render Movie without a title');
  }
  return (
    <React.Fragment>
      <h2>{props.title} ({props.year})</h2>
      <p>Director: {props.director}</p>
      <span onClick={props.onDeleteButtonClick}>(x)</span><br/>
      <input type="text" onChange={props.onInputChange} value={props.title} />
    </React.Fragment>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default withClass(Movie, css.Movie);
