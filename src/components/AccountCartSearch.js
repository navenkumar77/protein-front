import React from "react";
import { Nav } from "react-bootstrap";

function AccountCartSearch() {
  return (
    <Nav className="ms-auto">
      {/* Search */}
      <Nav.Link href="#search" className="fw-bold text-dark">
        <i className="bi bi-search"></i> Search
      </Nav.Link>

      {/* Account */}
      <Nav.Link href="#account" className="fw-bold text-dark">
        Account
      </Nav.Link>

      {/* Cart */}
      <Nav.Link href="#cart" className="fw-bold text-dark">
        <i className="bi bi-cart"></i> Cart (0)
      </Nav.Link>
    </Nav>
  );
}

export default AccountCartSearch;
