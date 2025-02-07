"use client"

import Swal from 'sweetalert2';
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Product } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { allProducts, four } from "@/lib/queires"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"
import { addtoCart } from "../actions/actions"

const Clothes =()=>{
    const [product,setProduct] =useState<Product[]>([])

    useEffect(()=>{
        async function fetchproduct(){
        const fetchedProduct :Product[] = await client.fetch(allProducts) 
        setProduct(fetchedProduct)    
    }
        fetchproduct()
    },[])

     const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        Swal.fire({
            position: "top-right",
            icon:"success",
            title:`${product.name} added to cart`,
            showConfirmButton : false,
            timer : 3000
          });
          
        addtoCart(product)      
     }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-20">
        <h1 className="text-2xl font-bold mt-[-50px] text-center mx-auto w-full absolute">OUR LATEST PRODUCT</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
    {product.map((product)=>(
    <div key={product._id}
    className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
    >
        <Link href={`/product/${product.slug.current}`}>
    {product.image && (
        <Image src={urlFor(product.image).url()} alt="image" width={350} height={400} className="w-[350px] h-[400px] object-cover rounded-lg  "/>
    )}
    <h2 className="text-lg font-samibold mt-4">
    {product.name}
    </h2>
    <p className="text-gray-400 mt-2">
        ${product.price}
        </p>
        <button
        className="bg-gradient-to-r from-teal-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
        onClick={(e) => handleAddToCart(e , product)}
       >
        Add To Cart
        </button>
        </Link>
    </div>
    ))}
    </div>
  )
}
export default Clothes