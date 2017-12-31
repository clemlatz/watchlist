import React from 'react';
import PropTypes from 'prop-types';

import css from './Cockpit.css';

const cockpit = (props) => {

  const classes = [css.title];
  if (props.movieLength < 3) {
    classes.push(css.red);
  }
  if (props.movieLength < 2) {
    classes.push(css.bold);
  }

  let buttonClass = [css.Button];
  if (props.showMovies) {
    buttonClass.push(css.red);
  }

  return (
    <React.Fragment>
      <h1 className={classes.join(' ')}>{props.appTitle}</h1>
      <button className={buttonClass.join(' ')} onClick={props.onClick}>Toggle movies</button>
    </React.Fragment>
  );
}

cockpit.propTypes = {
  appTitle: PropTypes.string.isRequired,
  movieLength: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  showMovies: PropTypes.bool.isRequired
}

export default cockpit;
