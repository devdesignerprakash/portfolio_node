import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
   <>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <b>Prakash Tech</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"> {/* Moves menu to the right */}
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" exact>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" exact>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact"exact>
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink}  to= "/login" exact>
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register" exact>
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default NavBar