"use client"
// import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Link from "next/link";

export default function FavoritesPage() {

  const {favorites, removeFromFavorites} = useCart()

  // 

  return (
    <main className="py-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorite items yet.
          <Link href="/" className="text-blue-600 underline">Add Your Favorites</Link>
        </p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((product) => (
            <li key={product.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <Link href={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded" />  
                </Link>
                <div>
                  <h2 className="font-semibold text-lg">{product.title}</h2>
                  <p className="text-blue-600 font-bold">₦{product.price}</p>
                </div>
              </div>
              <button
                  onClick={() => removeFromFavorites(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}