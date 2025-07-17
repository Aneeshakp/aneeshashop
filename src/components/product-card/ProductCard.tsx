'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProductCard({ prod }: any) {
  const router = useRouter();

  const navigateWithFilter = () => {
    const searchParams = `?title=${encodeURIComponent(prod.title)}`;
    router.push(`/products/${prod.id}${searchParams}`);
  };

  const handleAddToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="card h-100 shadow-sm">
      <div
        className="bg-light d-flex align-items-center justify-content-center"
        style={{ height: '200px' }}>
        {prod.image ? (
          <img
            src={prod.image}
            alt={prod.title}
            className="img-fluid object-fit-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}/>
        ) : (
          <span className="text-muted">No Image</span>
        )}
      </div>
      <div className="card-body d-flex flex-column">
        <h3
          className="text-lg font-semibold text-blue-700 hover:underline"
          onClick={navigateWithFilter}
          style={{ cursor: 'pointer' }}>
          {prod.title}
        </h3>
        <p className="card-text text-truncate">{prod.description}</p>
        <div className="mt-auto">
          <h6 className="text-success">₹ {prod.price}</h6>
          <button className="btn btn-warning w-100 mt-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
