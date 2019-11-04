import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';

class App extends Component {
  render() {
    console.log("HI")
    return (
      <div>
        <QuoteBox /> 
      </div>
    );
  }
}

export default App;