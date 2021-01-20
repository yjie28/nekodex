import { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

import './App.css';

class App extends Component {
  // class has access to state

  constructor() {
    super(); // super calls the constructor method on the component class

    this.state = {
      cats: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }));
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter((cat) =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Cats..."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;

/*
 *  state change -> re-render,
 *  whatever is inside {} is JS expression
 *
 *  state vs. props
 *  state becomes prop once it gets passed down to a coponent
 *
 *  this.setState is an asynchronous function,
 *  if we want to do something with the state immediately after we set it,
 *  then we have to include a second argument
 *
 *  SetState should NOT be called in render,
 *  if state changes, App re-renders, and setState gets called again,
 *  this will create a loop
 *
 *  functional component - no state (no access to the constructor) or life cycle methods
 *  just returns some HTML
 *
 */
