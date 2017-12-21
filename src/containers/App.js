import React, { Component } from 'react';
import css from './App.css';
import Movie from '../components/Movies/Movie/Movie';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showMovies: true,
      movies: [
        { id: 1, title: "Mother", director: "Darren Aronofsky" },
        { id: 2, title: "La La Land", director: "Damien Chazelle" },
        { id: 3, title: "The Last Jedi", director: "Rian Johnson" },
        //{ id: 4, director: "Steven Spielberg" }
      ]
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const movie = {
        id: prevState.movies.length + 1,
        title: this._title.value,
        director: this._director.value
      };
      const movies = prevState.movies;
      movies.push(movie);
      return { movies };
    });
  }

  deleteMovie(id) {
    console.log(id);
    this.setState(prevState => {
      const movies = prevState.movies.filter(movie => movie.id !== id);
      return { movies };
    });
  }

  titleChangedHandler = (event, id) => {
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
    const formStyle = {
      marginTop: '15px'
    };

    let movies = null;
    let buttonClass = '';
    if (this.state.showMovies) {
      movies = (
        <div className={css.movies}>
          {this.state.movies.map(movie => {
            return (
              <ErrorBoundary key={movie.id}>
                <Movie
                  onDeleteButtonClick={() => this.deleteMovie(movie.id)}
                  onInputChange={(e) => this.titleChangedHandler(e, movie.id)}
                  title={movie.title}
                  director={movie.director}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      )
      buttonClass = css.red;
    }

    const classes = [css.title];
    const movieLength = this.state.movies.length;
    if (movieLength < 3) {
      classes.push(css.red);
    }
    if (movieLength < 2) {
      classes.push(css.bold);
    }

    return (
      <div className={css.App}>
        <h1 className={classes.join(' ')}>Movies</h1>
        <button className={buttonClass} onClick={this._toggleMoviesHandler}>Toggle movies</button>
        {movies}
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <input name="title" placeholder="Title" ref={(input) => this._title = input}/>
          <input name="director" placeholder="Director" ref={(input) => this._director = input}/>
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default App;
