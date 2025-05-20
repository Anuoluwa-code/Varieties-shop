
'use client';

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/component/CartContext";
import { useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {color} = useCart()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }; []});

  return (
    <nav className={`w-full shadow-md ${color} bg-fixed px-6 py-4 flex items-center justify-between relative z-50`}>
      <div className="text-2xl font-extrabold text-[#323232] font-serif flex items-center space-x-2">
        <img src="/images/logo.jpg" className="h-8 w-8" alt="Logo" />
        <b>ALPHA.COM</b>
      </div>

      <ul className="hidden md:flex space-x-8 text-[#323232] font-medium">
        <li>
          <Link href="/" className="hover:text-indigo-600 transition duration-300 text-white font-bold">
            Home
          </Link>
          
        </li>
        
        <li>
          <Link href="/products" className="hover:text-indigo-600 transition duration-300 text-white font-bold">
            Products
          </Link>
        </li>
       
        <li>
          <Link href="/contact" className="hover:text-indigo-600 transition duration-300 text-white font-bold">
            Contact
          </Link>
        </li>
        <li>
        <Link href="/cart" className="hover:text-indigo-600 transition duration-300 text-white font-bold">
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
        </Link>
        </li>
        <li>
        <Link href="/wish" className="hover:text-indigo-600 transition duration-300 text-white font-bold">
           <FontAwesomeIcon icon={faHeart} className="mr-2" /> 
          </Link>
        </li>
        <li>
        <Link href="/log-in" className="hidden md:flex items-center space-x-4 text-white hover:text-indigo-600 transition duration-300 font-bold">Login</Link>
        </li>
        <li>
          <Link href="/sign-up" className="hidden md:flex items-center space-x-4 bg-[#14532b] rounded-2xl text-white py-2 px-2 hover:text-indigo-600 transition duration-300 font-bold">Sign Up</Link>
        </li>
        </ul>
      
      <div className="md:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="w-6 h-0.5 bg-black mb-1" />
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-black" />
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white rounded shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 text-lg font-semibold text-gray-800">
          <button className="self-end text-xl" onClick={() => setMenuOpen(false)}></button>
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-green-800">Home</Link>
          
          <Link href="/products" onClick={() => setMenuOpen(false)} className="text-green-800">Products</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-green-800">Contact</Link>

          <Link href="/cart" className="hover:text-indigo-600 transition duration-300 text-white font-bold"><FontAwesomeIcon icon={faHeart} className="mr-2 text-green-800" /> 
          </Link>
          
          <Link href="/wish" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-green-800" />
          </Link>

          <Link href="/log-in" onClick={() => setMenuOpen(false)}
          className=" rounded text-green-800 py-2 px-2 hover:text-indigo-600 transition duration-300 font-bold">Login</Link>

          <Link href="/sign-up" onClick={() => setMenuOpen(false)} className="rounded text-green-800 py-2  px-2 hover:text-indigo-600 transition duration-300 font-bold">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
