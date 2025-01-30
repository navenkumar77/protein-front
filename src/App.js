import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer"
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <Footer />
      </>
  )
}

export default App;
