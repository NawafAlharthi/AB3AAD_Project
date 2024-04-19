// NavigationBar.js
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mainLogo from '../img/Logo.png';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/">
          <img
            src={mainLogo}
            width="85"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
        <Navbar.Brand href="#">AB3AAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Publications" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="/posts">Medical</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/postsM">Mechanical</NavDropdown.Item>
            </NavDropdown>
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