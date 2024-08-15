import React from 'react';
import { Navbar, Container, Nav, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import rabbit from './rabbit.jpg';
import polar from './polar.jpg';
import penguin from './penguin.webp';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Animal Kingdom</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-4">
        <Row className="text-center">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={rabbit} alt="Rabbit" />
              <Card.Body>
                <Card.Title>Rabbit</Card.Title>
                <Card.Text>
                  Rabbits are small mammals with fluffy tails and long ears. They are herbivores that feed by grazing on grass and leafy weeds.
                </Card.Text>
                <Button variant="primary">Check</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={penguin} alt="Penguin" />
              <Card.Body>
                <Card.Title>Penguin</Card.Title>
                <Card.Text>
                  Penguins are aquatic, flightless birds living almost exclusively in the Southern Hemisphere.
                </Card.Text>
                <Button variant="primary">Check</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={polar} alt="Polar Bear" />
              <Card.Body>
                <Card.Title>Polar Bear</Card.Title>
                <Card.Text>
                  Polar bears are large carnivorous bears that live in the Arctic. They are the largest land predators and are known for their thick white fur.
                </Card.Text>
                <Button variant="primary">Check</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Success Rate Progress Bars */}
        <h3 className="mt-5">Success Rate in the Last 4 Years</h3>
        <div className="mb-4">
          <h5>Rabbit</h5>
          <ProgressBar now={35} label="35%" variant="success" />
        </div>
        <div className="mb-4">
          <h5>Penguin</h5>
          <ProgressBar now={50} label="50%" variant="warning" />
        </div>
        <div className="mb-4">
          <h5>Polar Bear</h5>
          <ProgressBar now={65} label="65%" variant="danger" />
        </div>

        {/* Additional Data Section */}
        <h4 className="mt-5">Interesting Facts</h4>
        <Row>
          <Col md={4}>
            <div className="p-3 mb-2 bg-light border">
              <h5>Rabbit Facts</h5>
              <p>Rabbits can turn their ears 180 degrees to better hear predators approaching.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3 mb-2 bg-light border">
              <h5>Penguin Facts</h5>
              <p>Penguins can drink seawater thanks to a gland that filters out salt from their bloodstream.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3 mb-2 bg-light border">
              <h5>Polar Bear Facts</h5>
              <p>Polar bears have black skin under their white fur, which helps them absorb and retain heat.</p>
            </div>
          </Col>
        </Row>

        {/* FAQ Section */}
        <h4 className="mt-5">Any Questions</h4>
        <div className="p-3 mb-2 bg-light border">
          Frequently Asked #1
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <Container>
          <p>&copy; 2024 Animal Kingdom. All rights reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Container>
      </footer>
    </div>
  );
}

export default App;
