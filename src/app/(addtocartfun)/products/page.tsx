"use client"

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa";


interface IProduct {
    id: number;
    title: string;
    image?: string[] | StaticImageData | string;
    slug: string;
    price: number;
    category: string;
    description: string;
    size: string[];
    color: string[];
    qty: number;
    discount?: number;
    imageDimensions?: { width: number; height: number }; // Add this field
  }
  const products: IProduct[] = [
    {
      id: 1,
      title: "Leather Wallet",
      image: ["/product4.png", "/product4.png"],
      slug: "leather-wallet",
      price: 2000,
      category: "Clothing",
      description: "A high-quality cotton t-shirt with a stylish design.",
      size: ["S", "M", "L", "XL"],
      color: ["red", "blue", "black"],
      qty: 1,
      discount: 2500,
      imageDimensions: { width: 400, height: 400 }, // Example dimensions
    },
    {
        id: 2,
        title: "Check Shirt",
        image: ["/product3.png", "/product3.png"],
        slug: "check-shirt",
        price: 3000,
        category: "Clothing",
        description: "A high-quality cotton t-shirt with a stylish design.",
        size: ["S", "M", "L", "XL"],
        color: ["red", "blue", "black"],
        qty: 1,
        discount: 3900,
        imageDimensions: { width: 400, height: 400 }, // Example dimensions
      },
      {
        id: 3,
        title: "Jeans",
        image: ["/product2.png", "/product2.png"],
        slug: "jeans",
        price: 4000,
        category: "Clothing",
        description: "A high-quality cotton t-shirt with a stylish design.",
        size: ["S", "M", "L", "XL"],
        color: ["red", "blue", "black"],
        qty: 1,
        discount: 5600,
        imageDimensions: { width: 400, height: 400 }, // Example dimensions
      },
      {
        id: 4,
        title: "Plan-T-Shirt",
        image: ["/product1.png", "/product1.png"],
        slug: "plan-t-shirt",
        price: 5000,
        category: "Clothing",
        description: "A high-quality cotton t-shirt with a stylish design.",
        size: ["S", "M", "L", "XL"],
        color: ["red", "blue", "black"],
        qty: 1,
        discount: 7000,
        imageDimensions: { width: 400, height: 400 }, // Example dimensions
      },
  ];


  let stars = [<FaStar key={0}/>,<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>]

  function Products() {

       
    return (
          <div className='mt-28'>
              <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-around '>
                  {
                    products.map((item:any,i:any)=>{
                      return(
                          <div key={i}>
                            <Link href={`/products/${item.slug}`}>
                            <Image src={item.image[0]} className='w-[290px] h-[290px] rounded-[20px]'  alt={item.title} width={200} height={200}></Image>
                            </Link>
                             <h2 className='font-bold'>{item.title}</h2>
                             {/* stars */}
                             <p className='flex justify-start items-center text-yellow-400'>{stars}</p>
                            <div className='flex space-x-3'>
                            <p className='font-bold'>{item.price}</p>
                            <p className='font-bold text-gray-400 line-through'>{item.discount}</p>
                            </div>
                          </div>
                      )
                    })  
                  }
              </div>
          </div>
    )
  }
  
  export default Products