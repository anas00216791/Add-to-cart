"use client"

import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SheetSide } from "./Humburgur";
import Image from "next/image";
 import { useSelector } from "react-redux";

  
 export default function Header() {
    const cart =  useSelector((state:any)=>state.cart)
    
     
  return (
     <header className="w-full fixed bg-white z-10 top-0  h-[60px] md:h-[90px] flex justify-between  pr-2 items-center max-w-screen-2xl mx-auto">
           <div className="flex justify-center items-center ">
          
            {/* logo */}
            <h1 className="text-2xl md:text-4xl font-extrabold pl-2">Online store</h1>
           
           </div>
            {/* navigation bar */}
            <ul className="hidden lg:block ">
                <li className="flex space-x-4 ml-4 mt-2 items-center ">
                    <Link href={`/`}>Home</Link>
                    <Link href={"/products"}>Products</Link>
                    <Link href={"/brands"}>Brands</Link>
                </li>
            </ul>
            {/* right */}
            <div className="ml-14 flex justify-center items-center">
                <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> <IoIosSearch className="text-xl hidden lg:block" /> <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] outline-none  w-full h-full rounded-full ml-2 hidden lg:block"/></div>
            </div>
            <div className="flex space-x-2 sm:space-x-4 ">
            {/* <IoIosSearch className="text-xl  lg:hidden" /> */}
            <Link href={"/cart"} className="relative hidden lg:block text-4xl"><IoCartOutline/>
            {
            cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )
            }
            </Link>
            <div className="text-4xl hidden lg:block">
               <MdOutlineAccountCircle />
               </div>
            </div>
            <div className="flex items-center justify-center space-x-5 lg:hidden">
            <Link href={"/cart"} className="relative text-4xl"><IoCartOutline/>
            </Link>   
            <SheetSide/>
            </div>
            
         {/* </div> */}
     </header>
  );
}