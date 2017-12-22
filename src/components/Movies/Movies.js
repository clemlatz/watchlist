import React from 'react';

import Movie from './Movie/Movie';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default (props) => props.movies.map((movie) => {
  return (
    <ErrorBoundary key={movie.id}>
      <Movie
        onDeleteButtonClick={() => props.onDeleteButtonClick(movie.id)}
        onInputChange={(e) => props.onInputChange(e, movie.id)}
        title={movie.title}
        director={movie.director}
      />
    </ErrorBoundary>
  );
});

