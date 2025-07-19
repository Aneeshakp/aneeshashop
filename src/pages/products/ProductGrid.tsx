import ProductCard from "@/components/product-card/ProductCard";

export default async function ProductGrid() {
  const res = await fetch('https://active-memory-bc594e2e08.strapiapp.com/api/products?populate=*', {
    cache: 'no-store',
  });
  const json = await res.json();

  const products = json.data.map((item: any) => {
    const attr = item.attributes || {};
    const imageUrl = attr.image?.data?.[0]?.attributes?.url
      ? `https://active-memory-bc594e2e08.strapiapp.com${attr.image.data[0].attributes.url}`
      : 'https://via.placeholder.com/200';

    return {
      id: item.id,
      title: attr.title || 'No Title',
      description: attr.description || '',
      price: attr.price || 0,
      image: imageUrl,
    };
  });

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {products.map((product: any) => (
        <div key={product.id} className="col">
          <ProductCard prod={product} />
        </div>
      ))}
    </div>
  );
}
