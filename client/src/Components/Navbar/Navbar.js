import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class navbarComponent extends Component {
    render() {
      return (

        <Container>
       

          <Row>
          <Navbar bg="primary" variant="dark">
           <Col>
           <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#findethlon">Find Ethlon</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="contactus">Contact Us</Nav.Link>
            </Nav>
           </Col> 
           <Col>
           <div>
            <img className="logoNav" src="../../../images/logo.png" alt="Ethlon Logo"></img>
            </div>
           </Col>  
           </Navbar> 
          </Row>

 
        </Container>
        
      );
    }
  }
  
  export default navbarComponent;