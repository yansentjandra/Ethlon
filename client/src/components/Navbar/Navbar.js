import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

class navbarComponent extends Component {
    render() {
      return (
        <Navbar bg="primary" variant="dark">

       <img className="logoNav" src="../../../images/logo.png" alt="Ethlon Logo"></img>
  
        <Nav className="mr-auto">
          <Nav.Link className = "navLink"  href="#home">Home</Nav.Link>
          <Nav.Link className = "navLink" href="#features">Features</Nav.Link>
          <Nav.Link className = "navLink" href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
        
      );
    }
  }
  
  export default navbarComponent;