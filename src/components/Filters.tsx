'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const qtyOptions = [1, 5, 10, 20];
const colors = ['Red', 'Blue', 'Green', 'Black'];
const priceRanges = [
  { label: 'Below ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: 'Above ₹1000', min: 1000, max: Infinity },
];

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [qtyFilter, setQtyFilter] = useState<string[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>('');

  useEffect(() => {
    const qty = searchParams!.get('qty')?.split(',') || [];
    const clr = searchParams!.get('color')?.split(',') || [];
    const price = searchParams!.get('price') || '';
    setQtyFilter(qty);
    setColorFilter(clr);
    setPriceFilter(price);
  }, [searchParams]);

  const updateParams = (key: string, value: string | string[], isSingle = false) => {
  const params = new URLSearchParams(searchParams!.toString()); 

    if (Array.isArray(value)) {
      if (value.length > 0) {
        params.set(key, value.join(','));
      } else {
        params.delete(key);
      }
    } else {
      if (isSingle) {
        params.set(key, value);
      } else {
        params.set(key, value);
      }
    }

    router.push(`/products?${params.toString()}`);
  };

  const toggleFilter = (filter: string[], value: string, setFilter: any, key: string) => {
    const updated = filter.includes(value)
      ? filter.filter((v) => v !== value)
      : [...filter, value];
    setFilter(updated);
    updateParams(key, updated);
  };

  return (
    <div className="p-4 border rounded w-full max-w-xs bg-white">
      <h4 className="font-bold mb-2">Available Quantity</h4>
      {qtyOptions.map((qty) => (
        <label key={qty} className="block mb-1">
          <input
            type="checkbox"
            checked={qtyFilter.includes(String(qty))}
            onChange={() =>
              toggleFilter(qtyFilter, String(qty), setQtyFilter, 'qty')
            }/>
          <span className="ml-2">{qty}+</span>
        </label>
      ))}

      <h4 className="font-bold mt-4 mb-2">Price Range</h4>
      {priceRanges.map((range) => (
        <label key={range.label} className="block mb-1">
          <input
            type="radio"
            name="price"
            checked={priceFilter === range.label}
            onChange={() => {
              setPriceFilter(range.label);
              updateParams('price', range.label, true);
            }}/>
          <span className="ml-2">{range.label}</span>
        </label>
      ))}

      <h4 className="font-bold mt-4 mb-2">Color</h4>
      {colors.map((clr) => (
        <label key={clr} className="block mb-1">
          <input
            type="checkbox"
            checked={colorFilter.includes(clr)}
            onChange={() =>
              toggleFilter(colorFilter, clr, setColorFilter, 'color')
            }/>
          <span className="ml-2">{clr}</span>
        </label>
      ))}
    </div>
  );
}
