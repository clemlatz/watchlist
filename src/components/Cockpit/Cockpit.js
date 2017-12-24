import React from 'react';

import css from './Cockpit.css';

export default (props) => {

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
