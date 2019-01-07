import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header/>
        <Search/>
        </header>
      </div>
    );
  }
}

export default App;
