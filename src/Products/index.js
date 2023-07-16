import React, { useEffect, useState } from "react";
 import {Link } from "react-router-dom";
import './style.css';
import '../DisplayProduct/index';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);


const getProducts = async () => {
  try {
    setLoading(true);
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json();
    setProducts(result.products);
    setLoading(false);
  } 
  catch (error) {
    console.log(error.message);
  }
};
console.log({ products });
if (loading) {
  return <h1> loading...</h1>;
}
return (
<div>
<h1 className="heading"> Shop Products</h1>
  <div className="product-display">
    {products.map((item) => (
    <div className="details" key={item.id}>
      
      <Link to={`/information/${item.id}`} key={item.id}><img className="image" src={item.thumbnail} alt="product"></img></Link>
      <h2 className="title">{item.title}</h2 >
      <p className="price">{item.price}</p>
      <p className="percent">{item.discountPercentage}</p>
          
 
    </div>
    ))}
  </div>
 
</div>
)};
export default Products;

