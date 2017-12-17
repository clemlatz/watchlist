import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <Person name="Clément" age="33"/>
        <Person name="Mathilde" age="29">Hobbies: pottery</Person>
      </div>
    );
  }
}

export default App;
