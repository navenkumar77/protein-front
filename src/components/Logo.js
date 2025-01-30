import React from "react";
import { Navbar } from "react-bootstrap"; // Import Navbar

function Logo() {
  return (
    <Navbar.Brand href="#home">
      <img
        src="logo-placeholder.png" // Replace with actual logo path
        alt="Salada Logo"
        className="logo"
      />
    </Navbar.Brand>
  );
}

export default Logo;
