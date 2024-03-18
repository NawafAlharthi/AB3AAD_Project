import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mainLogo from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/img/Logo.png';

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
            <Nav.Link as={Link} to="/posts">Publications</Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/adminstration/">Adminstration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/content/">Content</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/3d/">3D modeling</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Dev/">Development</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;