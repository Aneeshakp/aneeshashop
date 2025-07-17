'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function AboutUs() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sCsP2C0oyqlaXcjs-y6FyYfrf2CcLezHNQ&s"
            alt="Supermarket"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <p className="lead">
            Welcome to <strong>Fresh to Home</strong> – your one-stop online store for the freshest fruits, vegetables, and essential household products.
          </p>
          <p>
            We take pride in delivering quality groceries to your doorstep, ensuring health, convenience, and savings—all from the comfort of your home. Whether it's daily vegetables, seasonal fruits, or kitchen essentials, we have everything covered.
          </p>
          <p>
            Our delivery service is <strong>completely free</strong>, fast, and reliable. We carefully pick, pack, and dispatch every order to ensure your satisfaction.
          </p>
          <p>
            Thank you for choosing Fresh to Home. We’re here to make your everyday shopping easier and fresher!
          </p>
        </div>
      </div>
    </div>
  );
}
