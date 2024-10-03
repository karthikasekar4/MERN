import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Function to add item to cart and store in localStorage
  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...storedCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="flex font-sans border border-gray-200 rounded-lg shadow-sm">
            <div className="flex-none w-48 relative">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  {product.title}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  ${product.price}
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  In stock
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  {/* Static sizes */}
                  <label>
                    <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      XS
                    </div>
                  </label>
                  <label>
                    <input className="sr-only peer" name="size" type="radio" value="s" />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      S
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  Add to bag
                </button>
              </div>
              <p className="text-sm text-slate-700">
                Free shipping on all continental US orders.
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductList;
