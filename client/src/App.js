import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.js'
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
