import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();  // Initialize the navigate function

  // Load items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Function to remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Total price including taxes and shipping (for simplicity, not calculating shipping or taxes here)
  const totalPrice = () => {
    const subtotal = calculateSubtotal();
    const shipping = 10.00;  // Example shipping cost
    const taxRate = 0.08;  // 8% sales tax
    const tax = subtotal * taxRate;
    const total = parseFloat(subtotal) + shipping + tax;
    return total.toFixed(2);
  };

  // Navigate to checkout page
  const goToCheckout = () => {
    navigate('/checkout');  // Change '/checkout' to your actual checkout route
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.imageSrc}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">${item.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${calculateSubtotal()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6 flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>${totalPrice()}</p>
                    </div>
                    <div className="mt-6">
                      <button
                        className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        onClick={goToCheckout}
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-gray-500">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => setOpen(false)}
                      >
                        Continue Shopping <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default CartPage;
