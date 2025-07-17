'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';


export default function HomePage() {
  const products = [
    {
      img: 'https://m.media-amazon.com/images/I/512DjRMXIfL._AC_UL480_FMwebp_QL65_.jpg',
      name: 'Pigeon Stainless Steel Inox Hydra 750 Drinking Water Bottle 700ml - Silver (Pack of 1)',
      price: '₹159 (50% OFF)',
    },
    {
      img: 'https://m.media-amazon.com/images/I/51sF1z2PSMS._AC_UL480_FMwebp_QL65_.jpg',
      name: 'SOLARA Unbreakable Water Bottle 1L with Motivational Time Marker',
      price: '₹699 (35% OFF)',
    },
    {
      img: 'https://m.media-amazon.com/images/I/51Np+iuzhSL._AC_UL480_FMwebp_QL65_.jpg',
      name: 'Speedex Water Bottles Stainless Steel Water Bottle 1 Litre',
      price: '₹329 (30% OFF)',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61l4HcOeu2L._AC_UL480_FMwebp_QL65_.jpg',
      name: 'Boldfit Water Bottles Stainless Steel Water Bottle 1 Litre - Black',
      price: '₹329 (40% OFF)',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71fOKiLWoKL._AC_UL480_FMwebp_QL65_.jpg',
      name: 'ADIVAN Motivational Water Bottle 1 Litre Sipper Bottle BPA Free',
      price: '₹149 (40% OFF)',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61u3AljyeTL._AC_UL480_FMwebp_QL65_.jpg',
      name: 'PEARLPET Throttle Water Bottle - Leak Proof Bottles for Refrigerator',
      price: '₹368 (30% OFF)',
    },
  ];

  return (
    <div className="container mt-4">
      <Carousel interval={3000} className="mb-5">
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/Prime_Day/PDED/GW/1/D249567746_IN_WLA_PD25_Gateway_PC_Hero_Lifestyle_3000x1200._CB790414087_.jpg"
            className="d-block w-100"
            alt="Banner 1"
            style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: 'top' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img25/Consumables/HPC/PD/GW/PEA/PC_Hero_Lifestyle_3000x1200_-_Prime_Blue._CB790430776_.jpg"
            className="d-block w-100"
            alt="Banner 2"
            style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: 'top' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/2025/Cons/PD25/GW/PEA/Cons_PEA_Unrec_PC_Hero_3000x1200._CB790426295_.jpg"
            className="d-block w-100"
            alt="Banner 3"
            style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: 'top' }}
          />
        </Carousel.Item>
      </Carousel>

<h4>BIG DEAL OFFERS FOR BOTTLES</h4>
      <div className="row g-4">
        {products.map((product, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div style={{ height: '220px', padding: '10px' }}>
                <img
                  src={product.img}
                  className="card-img-top h-100 w-100"
                  alt={product.name}
                  style={{ objectFit: 'contain' }}/>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title" style={{ fontSize: '15px' }}>{product.name}</h5>
                <p className="card-text text-success fw-bold">{product.price}</p>
                <button className="btn btn-primary mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
