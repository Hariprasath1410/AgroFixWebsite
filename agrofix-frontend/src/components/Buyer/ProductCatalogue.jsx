import React, { useEffect, useState } from "react";
import API from "../../services/api";
import "./ProductCatalogue.css";

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch(() => alert("Failed to fetch products"));
  }, []);

  return (
    <div className="catalogue-container">
      <h1>Product Catalogue</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}/unit</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalogue;
