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

    /*  define 'this' in methods in the constructor
        
        function.bind is a method on any function that returns a new 
        function where the context of 'this' is set to whatever we pass to it
        
        in this case, the context of 'this' is set to the 'this' keyword 
        that was defined in the constructor
    */

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }));
  }

  /*  setState is undefined, because JS by default doesn't set its scope of 'this' on functions,
      have to explicitly state what contect 'this' should be */

  /* handleChange(e) {
    this.setState({ searchField: e.target.value });
  } */

  /*  arrow functions automatically allow set 'this' when the method was defined, 
      lexical scoping - binds the context to the place where they were defined in the first place
      
      When JS defined App Component, it also defined all of the methods on the components, 
      including the handleChange because it is an arrow function
  */
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter((cat) =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Nekodex</h1>
        <SearchBox
          placeholder="Search Cats..."
          handleChange={this.handleChange}
        />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;

/*
 *  _state change -> re-render,
 *  whatever is inside {} is JS expression
 *
 *  _state vs. props
 *  state becomes prop once it gets passed down to a component
 *
 *  this.setState is an asynchronous function,
 *  if we want to do something with the state immediately after we set it,
 *  then we have to include a second argument
 *
 *  _SetState should NOT be called in render,
 *  if state changes, App re-renders, and setState gets called again,
 *  this will create a loop
 *
 *  _functional component - no state (no access to the constructor) or life cycle methods
 *  just returns some HTML
 *
 *  _Writing methods on -classes-
 *  'this' keyword is set to the context of our class component,
 *  'this' keyword gets bound differently depending on how we write the class method
 *
 */
