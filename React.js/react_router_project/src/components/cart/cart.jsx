import React from 'react';
import { Link } from 'react-router-dom';

// --- Cart Page Component ---
// This component provides the UI for the shopping cart page,
// where users can review their selected books before checkout.
const CartPage = () => {
  // Sample data for cart items
  const cartItems = [
    { id: 1, title: 'The Prophet', author: 'Khalil Gibran', imageUrl: 'https://placehold.co/100x150/5E412F/fff?text=Book+1', price: 500, quantity: 1 },
    { id: 3, title: 'The Holy Quran', author: 'Various', imageUrl: 'https://placehold.co/100x150/5E412F/fff?text=Book+3', price: 800, quantity: 2 },
  ];

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-[#f2e7d7] text-[#4a342b] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl font-bold text-center font-serif mb-12">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="md:col-span-2 space-y-6">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Cart Summary Section */}
            <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-xl h-fit">
              <h2 className="text-3xl font-semibold font-serif mb-4">Order Summary</h2>
              <div className="space-y-2 text-md">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Rs. 50</span>
                </div>
                <hr className="my-2 border-t border-[#d4c1a8]" />
                <div className="flex justify-between text-xl font-bold text-[#4a342b]">
                  <span>Total:</span>
                  <span>Rs. {subtotal + 50}</span>
                </div>
              </div>
              <Link to="/checkout" className="mt-6 block text-center">
                <button className="bg-[#4a342b] text-[#e0c9a4] font-semibold py-3 px-8 w-full rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold text-[#4a342b] mb-4">Your cart is empty.</h2>
            <Link to="/catalog">
              <button className="bg-[#4a342b] text-[#e0c9a4] font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                Start Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Cart Item Component ---
// Renders a single item in the cart.
const CartItem = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-20 h-24 object-cover rounded"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/100x150/5E412F/fff?text=No+Image";
        }}
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[#4a342b] font-serif mb-1">{item.title}</h3>
        <p className="text-sm text-[#888]">by {item.author}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="font-bold">Quantity:</span>
          <span className="text-md">{item.quantity}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-lg font-bold text-[#4a342b]">
          Rs. {item.price * item.quantity}
        </span>
      </div>
    </div>
  );
};

export default CartPage;
