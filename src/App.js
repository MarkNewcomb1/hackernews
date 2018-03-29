import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
	  var helloWorld = 'Welcome to the Road to learn React';
	  var anotherVar = 'This is another variable I\'m defining.';
    return (
      <div className="App">
	  	<h2>{helloWorld}</h2>
	  	<p>{anotherVar}</p>
      </div>
    );
  }
}

export default App;
