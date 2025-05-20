
'use client';

import React from "react";
import Link from "next/link";
import { useCart } from "@/component/CartContext"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const ProductCard = ({ product }) => {
  const { addToCart, addToFavorites } = useCart(); 
  const {color} = useCart()

  return (
    <div className={`product-card ${color} rounded p-4 shadow-neutral-500 hover:shadow-lg transition duration-300`}>
      
      <Link href={`/product/${product.id}`}>
      {product.video ? (
  <video
    src={product.video}
    // controls
    autoPlay
    loop
    muted
    width={400}
    height={400}
    className="w-full h-80 object-cover rounded mb-3 shadow-neutral-500 hover:shadow-lg transition duration-300"
  />
  
) : (
  <Image
    src={product.image}
    alt={product.title}
    width={400}
    height={400}
    loading="lazy"
    className="w-full h-80 object-cover rounded zoom-out-image cursor-pointer mb-3 hover:scale-105 transition-transform duration-300"
  />
)}

      </Link>

      <h3 className="text-lg font-bold text-white mb-2 ">{product.title}</h3>
      <p className="text-white font-serif">{product.description[0]}</p>
      <p className="text-white font-semibold mt-2">{product.price}</p>
      <p className="text-blue-500 mt-2">&#9733; &#9733; &#9733; &#9734; {product.rating}</p>

      <div>
        <button
          onClick={() => addToCart(product)}
          className="bg-[#14532b] text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 cursor-pointer transition duration-300"
        >
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
        </button>

        <button
          onClick={() => addToFavorites(product)}
          className="bg-[#14532b] text-white py-2 px-4 rounded mt-4 ml-2 hover:bg-blue-700 cursor-pointer transition duration-300"
        >
          <FontAwesomeIcon icon={faHeart} className="mr-2 flex justify-center items-center" /> 
        </button>
      </div>

      <Link
        href={`/product/${product.id}`}
        className="text-blue-500 hover:underline mt-2 block font-bold"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
