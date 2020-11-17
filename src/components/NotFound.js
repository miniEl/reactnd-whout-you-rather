import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class NotFound extends Component {
  render() {
    return (
      <Container className="not-found-card" expand="sm">
        <Card>
          <Card.Body>
            <h3>404</h3>
            Page Not Found
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default NotFound;