'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductCard from '@/components/product-card/ProductCard';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  color: string;
  availableQty: number;
}

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const searchParams = useSearchParams()!;
  const router = useRouter();

  useEffect(() => {
    fetch('https://active-memory-bc594e2e08.strapiapp.com/api/products?populate=*')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched API Data:', data);
        if (Array.isArray(data.data)) {
          const cleanProducts = data.data.map((item: any) => {
            const attr = item.attributes;
            const imageUrl = attr.image?.data?.[0]?.attributes?.url
              ? `https://active-memory-bc594e2e08.strapiapp.com${attr.image.data[0].attributes.url}`
              : 'https://via.placeholder.com/200';

            return {
              id: item.id,
              title: attr.title,
              description: attr.description,
              price: attr.price,
              image: imageUrl,
              color: attr.color,
              availableQty: attr.availableQty,
            };
          });
          setProducts(cleanProducts);
        } else {
          setError('Invalid data format from API.');
        }
      })
      .catch(() => setError('Failed to fetch products.'));
  }, []);

  const qtyFilter = searchParams.get('qty')?.split(',').map(Number) || [];
  const colorFilter = searchParams.get('color')?.split(',') || [];
  const priceLabel = searchParams.get('price') || '';
  const titleQuery = searchParams.get('title')?.toLowerCase() || '';

  const filteredProducts = products.filter((p) => {
    const titleMatch = !titleQuery || p.title.toLowerCase().includes(titleQuery);
    const qtyMatch = qtyFilter.length === 0 || qtyFilter.some((q) => p.availableQty >= q);
    const colorMatch = colorFilter.length === 0 || colorFilter.includes(p.color);
    const priceMatch = (() => {
      const price = p.price;
      if (!priceLabel) return true;
      if (priceLabel === 'Below ₹500') return price < 500;
      if (priceLabel === '₹500 - ₹1000') return price >= 500 && price <= 1000;
      if (priceLabel === 'Above ₹1000') return price > 1000;
      return true;
    })();
    return titleMatch && qtyMatch && colorMatch && priceMatch;
  });

  const updateParams = (key: string, value: string, isRadio = false) => {
    const params = new URLSearchParams(searchParams.toString());
    const existing = params.get(key)?.split(',') || [];

    let updated: string[] = [];
    if (isRadio) {
      params.set(key, value);
    } else {
      updated = existing.includes(value)
        ? existing.filter((v) => v !== value)
        : [...existing, value];

      updated.length > 0
        ? params.set(key, updated.join(','))
        : params.delete(key);
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Products</h1>
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="p-3 border rounded bg-light">
            <h5 className="fw-bold mb-3">Available Quantity</h5>
            {[1, 5, 10, 20].map((qty) => (
              <div key={qty} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`qty-${qty}`}
                  checked={qtyFilter.includes(qty)}
                  onChange={() => updateParams('qty', String(qty))}
                />
                <label htmlFor={`qty-${qty}`} className="form-check-label">
                  {qty}+
                </label>
              </div>
            ))}

            <h5 className="fw-bold mt-4 mb-3">Price Range</h5>
            {['Below ₹500', '₹500 - ₹1000', 'Above ₹1000'].map((label) => (
              <div key={label} className="form-check">
                <input
                  type="radio"
                  name="price"
                  className="form-check-input"
                  id={`price-${label}`}
                  checked={priceLabel === label}
                  onChange={() => updateParams('price', label, true)}
                />
                <label htmlFor={`price-${label}`} className="form-check-label">
                  {label}
                </label>
              </div>
            ))}

            <h5 className="fw-bold mt-4 mb-3">Color</h5>
            {['Red', 'Blue', 'Green', 'Black'].map((clr) => (
              <div key={clr} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`color-${clr}`}
                  checked={colorFilter.includes(clr)}
                  onChange={() => updateParams('color', clr)}
                />
                <label htmlFor={`color-${clr}`} className="form-check-label">
                  {clr}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col">
                <ProductCard prod={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
