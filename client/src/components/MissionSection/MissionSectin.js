import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MissionSection.css';

class MissionSection extends Component {
    render() {
      return (
        <Container>
        <Row>
            <Col>
            <img src="../../mission-icon.png" alt="mission"/>
            </Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>   
      );
    }
  }
  
  export default MissionSection;