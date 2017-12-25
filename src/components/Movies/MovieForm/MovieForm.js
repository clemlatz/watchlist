import React from 'react';

export default class MovieForm extends React.Component {
  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.addMovie(
      this._title.value,
      this._director.value,
      parseInt(this._year.value, 10)
    );
  }

  componentDidMount() {
    this._title.focus();
  }

  render() {
    const formStyle = {
      marginTop: '15px'
    };

    return (
      <form style={formStyle} onSubmit={this._handleSubmit}>
        <input required name="title" placeholder="Title" ref={(input) => this._title = input}/><br/>
        <input required name="director" placeholder="Director" ref={(input) => this._director = input}/><br/>
        <input required name="year" placeholder="Year" ref={(input) => this._year = input}/><br/>
        <button type="submit">add</button>
        </form>
    );
  }
}
