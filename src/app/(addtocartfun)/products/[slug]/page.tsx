"use client"
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../Redux/features/cartSlice';
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
      discount: 500,
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
        discount: 700,
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
        discount: 800,
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
        discount: 1000,
        imageDimensions: { width: 400, height: 400 }, // Example dimensions
      },
  ];

let stars = [<FaStar key={0}/>,<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>]

function SlugPage({ params}: {params:{slug:string}} ) { 
    const items:any = products.find((item:any)=>item.slug === params.slug);
    //    useState 
    const dispatch = useDispatch();
 
 const [cartItem,setcartItem] = useState({
        id:items.id,
        title:items.title,
        image: items.image,
        slug:items.slug,
        price:items.price, 
        size: items.size,
        color:items.color,
        description:items.description,
        qty: items.qty,
        discount: items.discount,
   
    })
   
    return (
      <div className='mt-24 flex flex-col lg:flex-row justify-around'>
         <div className='sm:space-y-3 space-x-3 sm:space-x-0 p-2 sm:p-0  order-2 sm:order-1 w-full lg:w-[200px] flex lg:flex-col items-center justify-start'>
           <Image src={items.image[0]} className='w-[100px]' alt={items.title} width={100} height={100}></Image>
           <Image src={items.image[1]} className='w-[100px]' alt={items.title} width={100} height={100}></Image>
           <Image src={items.image[0]} className='w-[100px]' alt={items.title} width={100} height={100}></Image>
         </div>
         {/* mid div */}
         <div className=' lg:w-[500px] flex justify-center mt-4 sm:mt-0  order-1 sm:order-2'>
         <Image src={items.image[0]} className='w-[400px]' alt={items.title} width={400} height={100}></Image>
         </div>
         {/* all text  */}
         <div className=' lg:w-[500px] space-y-2 p-3 sm:p-0 mt-3 sm:mt-0 order-3'>
            <h1 className='text-xl font-bold lg:text-3xl'>{items.title}</h1>
             {/* stars */}
             <p className='flex justify-start items-center text-yellow-400'>{stars}</p>
             {/* price */}
            <div className='flex space-x-3'>
             <p className='font-bold'>{cartItem.price * cartItem.qty} </p>
             <p className='font-bold text-gray-400 line-through'>
              {cartItem.discount >0 && (cartItem.price -(cartItem.price - cartItem.discount) *3)* cartItem.qty} </p>
             </div>
             {/* des */}
             <p>{items.description}</p>
             {/* color */}
             <p className='text-gray-400'>Select Colors</p>
             <div className='space-x-3'>
               {
                items.color.map((item:any,i:any)=>{
                    return <button key={i} onClick={()=>setcartItem({...cartItem,color:item})} className='w-[37px] active:outline h-[37px] rounded-full ' style={{backgroundColor:item}}></button>
                })
               }
             
             </div>
             {/* size */}
             <p className='text-gray-400'>Select Size</p>
             <div className='space-x-3'>
                 {
                    items.size.map((item:any,i:any)=>{
                        return <button key={i} 
                        onClick={()=>setcartItem({...cartItem,size:item})}
                        className='w-[70px] active:outline h-[37px] rounded-[16px] bg-gray-500'>{item}</button>
                    })
                 }
                
             </div>
        
             {/* INcreament decreament */}
              <div className='flex justify-start items-center pt-10'>
              <button 
               onClick={()=>setcartItem({ ...cartItem,qty:cartItem.qty <= 1? 1 :  --cartItem.qty})}
              className='w-10'><Minus/></button>
             <span className='w-4'>{cartItem.qty}</span>
             <button onClick={(()=>setcartItem({...cartItem,qty:++cartItem.qty}))} className='w-10'><Plus/></button>
              {/* add to cart */}
              <Button  onClick={()=>dispatch(addtocart(cartItem))}  className='lg:w-[300px] text-white bg-black'>Add to cart</Button>
              
              </div>
             
         </div>
      </div>
  )
}

export default SlugPage