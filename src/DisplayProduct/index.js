import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from'react-router-dom';
import './style.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading  more ...</p>;
  }
  return (
    <div className='container'>
      
      <div className='container-content'>
        <img src={product.thumbnail} alt={product.title} />
        <p>Name:{product.title}</p>
        <p>Description:{product.description}</p>
        <p>Brand:{product.brand}</p>
        <p>Price:{product.price}</p>
        <p>Ratings:{product.rating}</p>
        <p>Stock:{product.stock}</p>
        <Link to={`/form`} ><button  className="button-add">Add Product</button></Link>  
      </div>
    </div>
  );
};
export default ProductDetailsPage;