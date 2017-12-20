import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showMovies: true,
      movies: [
        { id: 1, title: "Mother", director: "Darren Aronofsky" },
        { id: 2, title: "La La Land", director: "Damien Chazelle" },
        { id: 3, title: "The Last Jedi", director: "Rian Johnson" }
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

    const buttonStyle = {
      background: 'red',
      border: '1px solid black',
      color: 'white',
      fontSize: '20px'
    };

    let movies = null;
    if (this.state.showMovies) {
      movies = (
        <div className="movie-list">
          {this.state.movies.map(movie => {
            return (
              <Movie
                onDeleteButtonClick={() => this.deleteMovie(movie.id)}
                onInputChange={(e) => this.titleChangedHandler(e, movie.id)}
                key={movie.id}
                title={movie.title}
                director={movie.director}
              />
            );
          })}
        </div>
      )
      buttonStyle.background = 'green';
    }

    const classes = ['App-title'];
    const movieLength = this.state.movies.length;
    if (movieLength < 3) {
      classes.push('red');
    }
    if (movieLength < 2) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Movies</h1>
        <button style={buttonStyle} onClick={this._toggleMoviesHandler}>Toggle movies</button>
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
