import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Temperature from './Components/Temperature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header/>
        </header>
        <div>
        <Search/>
        <Temperature/>
        </div>
      </div>
    );
  }
}

export default App;
