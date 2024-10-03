import React, { useState } from 'react';
import API from '../api';  // Import the configured API instance

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('description', description);

    
    if (image) {
     formData.append('image', image);  // Ensure this field matches the server-side 'image'
    } else {
      console.log("No image file selected");
    }
  
    // Log formData for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await API.post('http://localhost:3001/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data); // For debugging
  
      if (response.data.success) {
        alert('Product added successfully!');
      } else {
        alert('Failed to add product: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
  type="file"
  onChange={(e) => setImage(e.target.files[0])}
/>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
