import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const CustomNavbar2 = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">🚀 MyBrand</Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Vishesh Janakri</Nav.Link>
            <Nav.Link href="#">Meetcreates</Nav.Link>

            {/* Auth Dropdown */}
            <NavDropdown title="Auth" id="auth-dropdown">
              <NavDropdown.Item href="#">Login</NavDropdown.Item>
              <NavDropdown.Item href="#">Signup</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar2;
