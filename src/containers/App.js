import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './App.css';

import withClass from '../hoc/withClass';

import Cockpit from '../components/Cockpit/Cockpit';
import Movies from '../components/Movies/Movies';
import MovieFinder from '../containers/MovieFinder/MovieFinder.js';

class App extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  state = {
    showMovies: true,
    movies: []
  }

  _addMovie = (movie) => {
    this.setState((prevState) => {
      const movies = [movie, ...prevState.movies];
      return { movies };
    });
  }

  _deleteMovie(id) {
    console.log(id);
    this.setState(prevState => {
      const movies = prevState.movies.filter(movie => movie.id !== id);
      return { movies };
    });
  }

  _titleChangedHandler = (event, id) => {
    const movies = [...this.state.movies];
    const movieIndex = movies.findIndex((movie) => {
      return movie.id === id;
    });
    const movie = {...movies[movieIndex]};
    movie.title = event.target.value;
    movies[movieIndex] = movie;
    this.setState({ movies });
  }

  _toggleMoviesHandler = () => {
    this.setState(prevState => {
      return { showMovies: !prevState.showMovies }
    });
  }

  render() {
    let movies = null;
    if (this.state.showMovies) {
      movies = <Movies movies={this.state.movies}
        onDeleteButtonClick={this._deleteMovie.bind(this)}
        onInputChange={this._titleChangedHandler.bind(this)} />;
    }

    return (
      <React.Fragment>
        <Cockpit
          appTitle={this.props.title}
          movieLength={this.state.movies.length}
          showMovies={this.state.showMovies}
          onClick={this._toggleMoviesHandler}
        />
        <MovieFinder addMovie={this._addMovie} />
        {movies}
      </React.Fragment>
    );
  }
}

export default withClass(App, css.App);
