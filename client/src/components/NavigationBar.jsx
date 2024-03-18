import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mainLogo from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/img/Logo.png';
import AboutUsDevelopment from '../components/AboutUs/AboutUsDevelopment';
import AboutUsAdmin from '../components/AboutUs/AboutUsAdmin';
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import AboutUs3DModeling from '../components/AboutUs/AboutUs3DModeling';

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
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/about-us/">Adminstration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us/">Content</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us/">3D modeling</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us/">Development</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;