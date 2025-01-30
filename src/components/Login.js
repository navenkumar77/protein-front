import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "./AuthContext";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext); // Consume context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Incorrect Email or Password");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      login(data.token); // Call login method from context
      navigate("/"); // Redirect to homepage
    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> &gt; <span>Account</span>
      </nav>
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <a href="/forgot-password" className="forgot-password-link">
              Forgot your password?
            </a>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <div className="login-footer">
          <a href="/register">Create account</a> or <a href="/">Return to Store</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
