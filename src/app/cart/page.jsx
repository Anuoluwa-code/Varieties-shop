'use client';

import React from 'react';
import { useCart } from '@/component/CartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty. <Link href="/" className="text-blue-600 underline">Go shopping</Link>
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-blue-600 font-bold">₦{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Total: ₦{getTotalPrice().toFixed(2)}</h2>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
