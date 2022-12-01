import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Link to="/">Home</Link>
      <Nav className="me-auto">
        <Link to="/movies">Movies</Link>
        <Link to="/add">Add Movie</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar;