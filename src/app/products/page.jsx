'use client'
import ProductCard from '@/component/ProductCard'
import products from '@/component/data/products'
import { useState } from 'react'
import { useCart } from '@/component/CartContext'


const ProductsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const {color} = useCart()

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product])};

    const addToFavorites = (product) => {
      setFavorites((prev) => [...prev, product])};
  return(
    <div className={`min-h-screen ${color} p-8`}>
      <h1 className='text-3xl font-bold mb-8 text-center text-white'>Shop Items</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          addToFavorites={(addToFavorites)}
          cartItems={cartItems}
          favorites={favorites}
          />
        ))}

      </div>
    </div>
  );
};

export default ProductsPage;