import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mainLogo from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/img/Logo.png';
import movingCubeGif from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/img/giphy.gif';

function NavigationBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img
          src={mainLogo}
          width="85"
          height="70"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <Navbar.Brand href="#">AB3AAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link> {/* Updated path */}
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          </Nav>
          {/* Display GIFs with color filters */}
          {/* ... (GIF display code remains unchanged) */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;