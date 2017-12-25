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

  _handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const movie = {
        id: Math.random(),
        title: this._title.value,
        director: this._director.value
      };
      const movies = prevState.movies;
      movies.push(movie);
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
        {movies}
        <MovieForm
          onSubmit={this._handleSubmit}
          titleRef={(input) => this._title = input}
          directorRef={(input) => this._director = input}
        />
      </React.Fragment>
    );
  }
}

export default withClass(App, css.App);
