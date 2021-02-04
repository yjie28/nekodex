# React.js Basics Revisit


 _state change -> re-render,
 whatever is inside {} is JS expression <br/>
 
 _state vs. props
 state becomes prop once it gets passed down to a component <br/>
 
 this.setState is an asynchronous function,
 if we want to do something with the state immediately after we set it,
 then we have to include a second argument
 
 _SetState should NOT be called in render,
 if state changes, App re-renders, and setState gets called again,
 this will create a loop <br/>
 
 _functional component - no state (no access to the constructor) or life cycle methods
 just returns some HTML
 
 _Writing methods on -classes-
 'this' keyword is set to the context of our class component,
 ‘this' keyword gets bound differently depending on how we write the class method <br/>
 
 ******************************
 
 setState is undefined, because JS by default doesn't set its scope of 'this' on functions,
 have to explicitly state what contect 'this' should be <br/>

  /* handleChange(e) {
    this.setState({ searchField: e.target.value });
  } */

arrow functions automatically allow set 'this' when the method was defined, 
lexical scoping - binds the context to the place where they were defined in the first place <br/>
      
 When JS defined App Component, it also defined all of the methods on the components, 
 including the handleChange because it is an arrow function
