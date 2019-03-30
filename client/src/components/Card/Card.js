import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Card.css';

class CardComponent extends Component {

    render() {
      const { volunteers } = this.props;;
      return (
         volunteers.map(function (data) {
          return<Row>
          <Col>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.imageURL} />
          <Card.Body>
            <Card.Title> Language: {data.language}</Card.Title>
            <Card.Text>
                <p>Name: {data.volunteerName}</p>
                <p>Available:{data.available}</p>
                <p>Contact:{data.contact}</p>
            </Card.Text>
          </Card.Body>
        </Card>
          </Col>
 
        </Row>
        })


      );
    }
  }
  
  export default CardComponent;