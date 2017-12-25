import React, { Component } from 'react';
import css from './App.css';

import withClass from '../hoc/withClass';

import Cockpit from '../components/Cockpit/Cockpit';
import Movies from '../components/Movies/Movies';
import MovieForm from '../components/Movies/MovieForm/MovieForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showMovies: true,
      movies: [
        { id: 1, title: "Mother", year: 2017, director: "Darren Aronofsky" },
        { id: 2, title: "La La Land", year: 2016, director: "Damien Chazelle" },
        { id: 3, title: "The Last Jedi", year: 2017, director: "Rian Johnson" },
        //{ id: 4, director: "Steven Spielberg" }
      ]
    }
  }

  _addMovie = (title, director, year) => {
    this.setState((prevState) => {
      const movie = {
        id: Math.random(),
        title,
        director,
        year
      };
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
        <MovieForm
          onSubmit={this._handleSubmit}
          addMovie={this._addMovie}
        />
        {movies}
      </React.Fragment>
    );
  }
}

export default withClass(App, css.App);
