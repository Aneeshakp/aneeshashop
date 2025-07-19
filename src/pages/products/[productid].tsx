'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.productid;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!productId) return;

    fetch('https://active-memory-bc594e2e08.strapiapp.com/api/products?populate=*')
      .then((res) => res.json())
      .then((data) => {
        const products = Array.isArray(data) ? data : data.data;
        const found = products.find((p: any) => p.id === parseInt(productId as string));
        if (found) {
          setProduct(found.attributes ? { ...found.attributes, id: found.id } : found);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch product');
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;

  const imageUrl =
    product?.image?.data?.[0]?.attributes?.url
      ? `https://active-memory-bc594e2e08.strapiapp.com${product.image.data[0].attributes.url}`
      : 'https://via.placeholder.com/200';

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={imageUrl}
        alt={product.title}
        className="h-80 mx-auto mb-4 object-contain"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-lg mb-2">Category: {product.category || 'N/A'}</p>
      <p className="text-lg mb-2">Color: {product.colour || 'N/A'}</p>
      <p className="text-lg mb-2">Size: {product.size || 'N/A'}</p>
      <p className="text-green-700 text-xl font-bold mb-4">₹{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}
