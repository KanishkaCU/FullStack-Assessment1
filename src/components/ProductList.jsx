import { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="catalog">
      <h1>Product Catalog</h1>
      <p>Discover amazing products</p>

      <div className="grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt={item.title} className="image" />

            <h2>{item.title}</h2>
            <p className="brand">{item.brand}</p>
            <p className="desc">{item.description.slice(0, 60)}...</p>

            <p className="price">Price: ${item.price}</p>
            <p className="discount">Discount: {item.discountPercentage}%</p>

            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
