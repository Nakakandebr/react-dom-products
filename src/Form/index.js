import React, { useState } from "react";
import { Link } from "react-router-dom";

import './style.css';

const Form = () => {
  
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    

    const data = new FormData();
    data.append('product', product);
    data.append('price', price);
    data.append('brand', brand);
    data.append('description', description);
    data.append('image', image);

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add</h1>
        <input
          placeholder="Title"
          type="text"
          onChange={(e) => setProduct(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Product Name"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Product Description"
          type="text"
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Percentage of the Product"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <input type="file" onChange={handleImageChange} />
        <br />
        <br />
        <Link to={{ pathname: '/home', state: { image } }}>
          <button className="but" type="submit">Add</button>
        </Link>

      </form>

      
    </div>
  );
};

export default Form;

