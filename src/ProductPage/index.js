import React, { useState, useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);
  console.log({ products });
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="product">
     
      {products.map((item) => (
        <div key={item.id} className="productkey">
       
          <img  src={item.images[0]} alt={item.title} className="productimage" />
        <p className="productprice">price &nbsp;ksh{item.price}</p>
        <p className="productdiscount">discount&nbsp;{item.discountPercentage}%</p>
        <Link to={`/ProductDetails/${item.id}` }className="buton">
            <button type="submit" className="button">View details</button >
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Products;