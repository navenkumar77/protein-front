import React, { useContext, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AuthContext } from "./AuthContext";
import "./Header.css";
import logo from "../assets/salada_logo_3_388x.avif";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  return (
    <header className="bg-white border-bottom shadow-sm">
      <Navbar expand="lg" className="py-3">
        <Container>
          {/* Left: Search Icon */}
          <div className="search-icon">
            <FiSearch size={22} className="text-dark me-2" />
            <span className="fw-bold text-dark">Search</span>
          </div>

          {/* Center: Logo */}
          <Navbar.Brand href="/home" className="mx-auto">
            <img src={logo} alt="Salada Logo" className="logo" />
          </Navbar.Brand>

          {/* Right: Account and Cart */}
          <div className="right-section d-flex align-items-center">
            <div
              className="account-dropdown me-3"
              onMouseEnter={() => setIsAccountHovered(true)}
              onMouseLeave={() => setIsAccountHovered(false)}
            >
              <Nav.Link href="/account" className="fw-bold text-dark">
                Account
              </Nav.Link>
              {isAccountHovered && (
                <div className="dropdown-menu">
                  {isLoggedIn ? (
                    <>
                      <a href="/account" className="dropdown-item">
                        Your Account
                      </a>
                      <button className="dropdown-item" onClick={logout}>
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <a href="/login" className="dropdown-item">
                        Log in
                      </a>
                      <a href="/register" className="dropdown-item">
                        Register
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
            <Nav.Link href="/cart" className="fw-bold text-dark d-flex align-items-center">
              Cart (0) <FiShoppingBag size={20} className="ms-2" />
            </Nav.Link>
          </div>

          {/* Navigation Links */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-links">
              <div
                className="nav-item dropdown"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <span className="nav-link fw-bold text-dark">Shop +</span>
                {isShopDropdownOpen && (
                  <div className="dropdown-menu shop-dropdown">
                    <a href="/shop/all" className="dropdown-item">Shop All</a>
                    <a href="/shop/best-sellers" className="dropdown-item">Best Sellers</a>
                    <a href="/shop/green-tea" className="dropdown-item">Green Tea</a>
                    <a href="/shop/matcha-green-tea" className="dropdown-item">Matcha Green Tea</a>
                    <a href="/shop/herbal-tea" className="dropdown-item">Herbal Tea</a>
                    <a href="/shop/white-tea" className="dropdown-item">White Tea</a>
                    <a href="/shop/black-tea" className="dropdown-item">Black Tea</a>
                    <a href="/shop/decaf-tea" className="dropdown-item">Decaf Tea</a>
                    <a href="/shop/gift-cards" className="dropdown-item">Gift Cards</a>
                    <a href="/shop/merch" className="dropdown-item">Merch</a>
                  </div>
                )}
              </div>
              <Nav.Link href="#blog" className="nav-item">
                Blog +
              </Nav.Link>
              <Nav.Link href="#about" className="nav-item">
                About Us +
              </Nav.Link>
              <Nav.Link href="#rewards" className="nav-item">
                Rewards
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-item">
                Contact
              </Nav.Link>
              <Nav.Link href="#find" className="nav-item">
                Find In Store
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
