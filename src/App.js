import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  constructor() {
    super();
    this.state = {
      persons: [
        { id: 1, name: "Clément", age: 33 },
        { id: 2, name: "Mathilde", age: 29 }
      ]
    }
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: 1, name: "Jean", age: 34 },
        { id: 2, name: "Anne", age: 30 }
      ]
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const person = {
        id: prevState.persons.length + 1,
        name: this._name.value,
        age: parseInt(this._age.value, 10)
      };
      const persons = prevState.persons;
      persons.push(person);
      return { persons };
    });
  }

  deletePerson(id) {
    console.log(id);
    this.setState(prevState => {
      const persons = prevState.persons.filter(person => person.id !== id);
      return { persons };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        {this.state.persons.map(person => {
          return (
            <Person
              onDeleteButtonClick={this.deletePerson.bind(this, person.id)}
              key={person.id}
              name={person.name}
              age={person.age}
            />
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="name" ref={(input) => this._name = input}/>
          <input name="age" placeholder="age" type="number" ref={(input) => this._age = input}/>
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default App;
