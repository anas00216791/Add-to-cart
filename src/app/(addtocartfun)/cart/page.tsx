"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button';
import CartPage from './cartpage';
interface Icart{
   id: number; // Product ka unique identifier
      title: string; // Product ka title ya name
      image?: string[] | StaticImageData | string; // Product ki images
      slug: string; // URL-friendly unique identifier for the product
      price: number; // Product ki price
      size: string[]; // Product ke available sizes
      color: string[]; // Product ke available colors
      qty: number; // Available quantity of the product
      discount?: number; // Discount on product (optional)
      uuid:string | number | undefined
}


interface CartItem {
  price: number;
  discount: number;
  qty: number;
}

function Cart() {
  
  // formula 
   
  const cartArray: CartItem[] = useSelector((state: { cart: CartItem[] }) => state.cart);

  const total = cartArray.reduce((total: number, arr: CartItem) => {
    const discountedPrice = arr.discount > 0 ? arr.price - (arr.price * arr.discount) * 0 : arr.price;
    return total + discountedPrice * arr.qty;
  }, 0);


   
  return (
      <div className=' mt-24 flex flex-col lg:flex-row justify-around items-center lg:items-start'>
         <CartPage/>
           {/* Order Summary */}
           <div className="bg-white p-4 w-[90%] lg:w-[500px] border rounded-[20px] mt-5 lg:mt-0">
                             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                             <div className="space-y-2">
                               <div className="flex justify-between">
                                 <p>Subtotal</p>
                                 <p>${total}</p>
                               </div>
                               <div className="flex justify-between">
                                 <p>Discount (-20%)</p>
                                 <p>-${0}</p>
                               </div>
                               <div className="flex justify-between">
                                 <p>Delivery Fee</p>
                                 <p>$0</p>
                               </div>
                               <div className="border-t pt-2 flex justify-between font-bold">
                                 <p>Total</p>
                                 <p>${total}</p>
                               </div>
                               <div className="flex justify-between items-center">
                                <input className="h-10 rounded-[6px] bg-[#F0F0F0] px-4 w-[200px] md:w-[360px] border-none" type="search" placeholder="Add promo code" />
                                <Button className="w-[100px] rounded-[20px]">Apply</Button>
                               </div>
                             </div>
                             <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
                               Go to Checkout
                             </button>
                         </div>
        
      </div>
  )
}

export default Cart