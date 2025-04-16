import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.euphoriatheme.uk/data/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products || []); // Ensure products is an array
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="products" className="py-16 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-bold mb-10">Our Products</h3>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-16 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-bold mb-10">Our Products</h3>
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 bg-gray-900 text-white">
      <h3 className="text-3xl font-bold text-center">Our Products</h3>
      <p className="text-sm text-gray-400 text-center mb-10">
        Some prices may be incorrect and product may be free.
      </p>
      <div className="grid md:grid-cols-3 gap-6 container mx-auto px-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="glass p-6 rounded-xl hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <p className="text-sm text-gray-400 mb-4">
              Installations: {product.installations}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {product.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm"
                >
                  {link.label} - {link.currency} {link.price}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}