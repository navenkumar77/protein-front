import React from "react";
import { Nav, Container } from "react-bootstrap";

function SubNavigation() {
  return (
    <nav className="secondary-nav bg-white border-top">
      <Container>
        <Nav className="justify-content-center py-2">
          <Nav.Link href="#shop-all" className="fw-bold text-dark">
            Shop All
          </Nav.Link>
          <Nav.Link href="#best-sellers" className="fw-bold text-dark">
            Best Sellers
          </Nav.Link>
          <Nav.Link href="#green-tea" className="fw-bold text-dark">
            Green Tea
          </Nav.Link>
          <Nav.Link href="#matcha-green-tea" className="fw-bold text-dark">
            Matcha Green Tea
          </Nav.Link>
          <Nav.Link href="#herbal-tea" className="fw-bold text-dark">
            Herbal Tea
          </Nav.Link>
          <Nav.Link href="#white-tea" className="fw-bold text-dark">
            White Tea
          </Nav.Link>
          <Nav.Link href="#black-tea" className="fw-bold text-dark">
            Black Tea
          </Nav.Link>
          <Nav.Link href="#decaf-tea" className="fw-bold text-dark">
            Decaf Tea
          </Nav.Link>
          <Nav.Link href="#gift-cards" className="fw-bold text-dark">
            Gift Cards
          </Nav.Link>
          <Nav.Link href="#merch" className="fw-bold text-dark">
            Merch
          </Nav.Link>
        </Nav>
      </Container>
    </nav>
  );
}

export default SubNavigation;
