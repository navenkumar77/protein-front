import React, { useEffect, useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/products/products") // Replace with actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className="text-center bg-light py-5">
        <div className="container">
          {/* Hero Section */}
          <img
            src="hero-image-placeholder.png"
            alt="Teapot and Tea"
            className="img-fluid mb-4"
          />
          <h1 className="text-primary">Take on the day with</h1>
          <h2 className="text-danger fw-bold">SALADA'S REFRESHING TEAS!</h2>
          <button className="btn btn-outline-primary mt-3">Shop Now</button>

          {/* Featured Products Section */}
          <h3 className="mt-5 fw-bold">Featured Products</h3>
          <div className="row mt-4">
            {products.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="product-card position-relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid product-image"
                  />
                  <div className="product-details position-absolute text-center">
                    <h5 className="text-dark">{product.title}</h5>
                    <p className="text-muted">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="text-center my-5">
        <h1 className="keep-it-flowing-text">KEEP IT FLOWING!</h1>
        <h2 className="subscribe-text">SUBSCRIBE TO ANY PRODUCT!</h2>
        <p className="additional-text">Select flavor and frequency</p>
        <div className="divider">|</div>
        <h2 className="save-text">SAVE ON EACH ORDER</h2>
        <p className="additional-text">
          Save 5% on every order and free shipping on orders of $15 or more
        </p>
      </section>
    </>
  );
}

export default HeroSection;
