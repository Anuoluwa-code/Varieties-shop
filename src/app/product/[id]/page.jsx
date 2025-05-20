"use client";
import { useParams } from "next/navigation";
import products from '@/component/data/products';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/component/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart(); 

  if (!product) {
    return (
      <div className="text-center p-10 text-red-600 text-xl">
        Product not found 🫠
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link
        href="/"
        className="text-[#16a34a] hover:underline text-sm inline-block mb-6"
      >
        ← Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image || product.images}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-extrabold font-serif text-white bg-[#14532b] p-4 rounded-lg flex text-center items-center justify-center">
            {product.title}
          </h1>
          <p className="text-lg text-white font-serif">{product.description}</p>
          <p className="text-xl font-semibold font-serif text-[#86efad]">
            Price: {product.price}
          </p>
          <p className=" text-[#86efad] font-serif">⭐ {product.rating} rating</p>
          <p className="text-sm  italic font-serif  text-[#86efad]">
            Category: {product.category}
          </p>

          <button onClick={() => addToCart(product)}
              className="bg-[#16a34a] text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 cursor-pointer transition duration-300" >
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              </button>

              
          
        </div>
      </div>
    </div>

    
  );
}
