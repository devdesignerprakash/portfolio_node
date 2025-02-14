import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../store/authStore';
const NavBar = () => {
  const isLoggedIn=useAuth()
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
            <Nav.Link as={NavLink} to="/" >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" >
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            {isLoggedIn? <Nav.Link as={NavLink} to="/logout">
              Logout
            </Nav.Link>:
            <>
            <Nav.Link as={NavLink}  to= "/login" >
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register" >
              SignUp
            </Nav.Link>
            </>} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default NavBar