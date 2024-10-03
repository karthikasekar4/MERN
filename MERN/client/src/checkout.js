import React, { useLocation, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
 // Get the passed state from CartPage
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    paymentMethod: 'Credit Card', // Default payment option
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const { total } = { total: 0 }; // Get total from CartPage

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.city || !formData.zip || !formData.country) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.paymentMethod === 'Credit Card') {
      if (!paymentDetails.cardNumber || !paymentDetails.expiration || !paymentDetails.cvv) {
        alert('Please enter valid payment details.');
        return;
      }
    }

    // You would typically send this data to the backend to process the payment
    alert('Order placed successfully!');
    // Navigate back to the home page (or wherever appropriate)
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Product List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        <div>
          {/* Here you can map over cart items, which could be passed as state */}
          <ul>
            {/* Assuming the items are passed as a prop or fetched from localStorage */}
            <li className="flex justify-between mb-4">
              <span>Product Name</span>
              <span>${total}</span>
            </li>
            {/* Add more items if needed */}
          </ul>
        </div>
      </div>

      {/* Shipping Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Payment Method Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>

        {/* Payment Details (if Credit Card) */}
        {formData.paymentMethod === 'Credit Card' && (
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  name="expiration"
                  value={paymentDetails.expiration}
                  onChange={handlePaymentChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handlePaymentChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-lg font-semibold">Total: ${total}</div>
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
