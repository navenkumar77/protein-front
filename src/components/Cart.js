import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Cart.css"; // Add custom styles if necessary

function Cart() {
  return (
    <Container className="cart-page" fluid>
      <Row>
        <Col>
          <h1 className="text-center">Your Cart</h1>
          <p className="text-center">Your cart is currently empty.</p>
          
          {/* Sign up section */}
          <div className="sign-up-save">
            <h3>Sign Up & Save</h3>
            <p>Subscribe to be the first to hear about our exclusive offers and latest arrivals</p>
            <Form className="sign-up-form">
              <Form.Control
                type="email"
                placeholder="Email address"
                className="sign-up-input"
              />
              <Button variant="success" className="sign-up-button">Sign Up</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
