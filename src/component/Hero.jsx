// components/Hero.jsx
'use client";'
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
      <div className="z-10 text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to ShopVerse</h1>
        <p className="text-lg mb-6">
          Elevate your style, discover the best products.
        </p>
        <Link href="/products">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
            Shop Now 🔥
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
