
'use client';
import React, { useState } from 'react';
import products from '@/component/data/products';
import ProductCard from '@/component/ProductCard';
import DarkModeToggle from '@/component/DarkModeToggle';
import { useCart } from '@/component/CartContext';
// import CartProvider from '@/component/CartContext'


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const {color} = useCart()
  // const { custom animate } = tailwindConfig.theme.extend;
  // const [Cart] = CartProvider()

  


  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
    alert(`${product.title} added to favorites!`)
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'All' || product.category === category)
  );
   
  const limitedProducts = filteredProducts.slice(0, 16); 
  
  return (
    <main className={`min-h-screen ${color} p-5`}>


<div className='min-h-screen'>

<div className='flex justify-end'>
      <DarkModeToggle />
      </div>
      
    
<section className="text-center mt-8">
        <h1 className="text-2xl font-extrabold font-serif text-white uppercase custom-animation ease-in-out 3s">
          Welcome to Our Shopping Store!
        </h1>
        <p className='text-lg font-bold capitalize text-white font-serif'>A Taste to shop for more...</p>
        <p className="text-lg font-extrabold font-serif text-white  mt-2 uppercase">
          Big Sale - Up to 50% OFF!
        </p>
      </section>

      
      
        
     
      <section className="mb-6">
        <h2 className="text-xl font-bold text-center mb-4 font-serif text-white">Find Your Favorite Products</h2>
        <p className="text-left text-lg font-serif text-white mb-4">Search and filter products</p>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex justify-center text-center items-center p-2 border border-white rounded font-serif  text-white mb-4 "
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-white font-serif rounded flex items-right"
        >
          <option value="All" className='text-white'>All Categories</option>
          <option value="Electronics" className='text-black font-serif'>Electronics</option>
          <option value="Clothing" className='text-black font-serif'>Clothing</option>
          <option value="Books" className='text-black font-serif'>Books</option>
          <option value="Food" className='text-black font-serif'>Foods</option>
          <option value="Fashion" className='text-black font-serif'>Fashion</option>
          <option value="Accessories" className='text-black font-serif'>Accessories</option>
          <option value="Footwear" className='text-black font-serif'>Footwear</option>
        </select>
      </section>


      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-serif">
        {limitedProducts.map((product) => (
          <ProductCard 
          key={product.id} 
          product={product}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
          />
        ))}
      </section>
      
          </div>
      <footer className="bg-[#14532b] rounded-2xl text-white text-center font-semibold py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} E-commerce Store. All rights reserved...</p>
      </footer>
    </main>
  );
};









