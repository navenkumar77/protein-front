import React, { useState } from "react";
import "./Register.css"; // Ensure it uses the same style as other components
import axios from "axios";


function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors as the user types
  };

  // Validate form fields
  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account created successfully!");
      console.log("Form Data:", formData);
      // const handleSubmit = async (event) => {
      //   event.preventDefault(); // Prevent default form submission
      // const userData = {
      //   firstName,
      //   lastName,
      //   email,
      //   password,
      // };
        // const userData = {
        //   firstName,
        //   lastName,
        //   email,
        //   password,
        // };
      
        try {
          const response = await axios.post("http://localhost:5001/api/register", formData);
          console.log("Response:", response.data); // Log response data
          alert("Registration successful!");
        } catch (error) {
          console.error("Error:", error.response ? error.response.data : error.message);
          alert("Registration failed! Please try again.");
        }
      
      
      // You can proceed to send the data to your backend here
    }
  };

  return (
    <div className="registration-container">
      <h1 className="text-center fw-bold">Create Account</h1>
      <form className="registration-form mx-auto" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <small className="text-danger">{errors.firstName}</small>
          )}
        </div>
        <div className="form-group mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <small className="text-danger">{errors.lastName}</small>
          )}
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>
        <button type="submit" className="btn btn-success w-100">
          Create
        </button>
        <p className="text-center mt-3">
          Log in with an existing account or{" "}
          <a href="/">Return to Store</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
