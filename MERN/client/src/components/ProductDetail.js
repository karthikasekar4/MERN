import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
