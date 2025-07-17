export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center p-5">Loading products...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
