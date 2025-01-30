import React from "react";
import { Nav } from "react-bootstrap";

function Navigation({ toggleSubNav }) {
  return (
    <Nav className="mx-auto">
      <Nav.Link
        href="#shop"
        className="fw-bold text-dark"
        onClick={toggleSubNav}
      >
        Shop
      </Nav.Link>
      <Nav.Link href="#blog" className="fw-bold text-dark">
        Blog
      </Nav.Link>
      <Nav.Link href="#about" className="fw-bold text-dark">
        About Us
      </Nav.Link>
      <Nav.Link href="#rewards" className="fw-bold text-dark">
        Rewards
      </Nav.Link>
      <Nav.Link href="#contact" className="fw-bold text-dark">
        Contact
      </Nav.Link>
      <Nav.Link href="#find" className="fw-bold text-dark">
        Find In Store
      </Nav.Link>
    </Nav>
  );
}

export default Navigation;
