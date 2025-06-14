import React, { useState } from 'react';
import productsData from './data/products';
import ProductCard from './components/ProductCard';

const ProductList = ({ addToCart }) => {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="🔍 Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
