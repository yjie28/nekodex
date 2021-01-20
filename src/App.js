import { Component } from 'react';

import { CardList } from './components/card-list/card-list';

import './App.css';

class App extends Component {
  // class has access to state

  constructor() {
    super(); // super calls the constructor method on the component class

    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList cats={this.state.cats} />
      </div>
    );
  }
}

export default App;

/*
 * state change -> re-render,
 * whatever is inside {} is JS expression
 */
