import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class MovieFinder extends React.Component {
  static propTypes = {
    addMovie: PropTypes.func.isRequired
  }

  state = {
    results: []
  }

  _searchMovie = (event) => {
    event.preventDefault();
    const query = this._query.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=66a36cfd82ace2dd1264616cbd7fc59b&language=fr&query=${query}`;
    axios.get(url)
      .then(response => {
        this.setState({ results: response.data.results });
      });
  }

  _resultClickHandler = (result) => {
    const movie = {
      id: result.id,
      title: result.title,
      releaseDate: result.release_date,
      poster: `https://image.tmdb.org/t/p/w185/${result.poster_path}`
    }
    console.log(movie);
    this.props.addMovie(movie);
    this.setState({ results: [] })
  }

  render() {
    const results = this.state.results.map(result => {
      return (
        <li
          key={result.id}
          onClick={() => this._resultClickHandler(result)}
          style={{ cursor: 'pointer' }}>
            {result.title} ({result.release_date})
        </li>
      );
    });
    return (
      <React.Fragment>
        <form onSubmit={this._searchMovie}>
          <input type="search" placeholder="Search movie to add" ref={(i) => this._query = i} />
          <button>Search</button>
        </form>
        <ul>
          {results}
        </ul>
      </React.Fragment>
    );
  }
}
