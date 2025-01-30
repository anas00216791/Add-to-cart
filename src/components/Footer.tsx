import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Image from "next/image";
import Stayudpate from "./update";



export default function Footer(){
    return(
        <main className="bg-[#F0F0F0] relative p-7 md:px-12 w-full h-full   md:h-[400px] flex flex-col  justify-start items-center mt-32">
          
           <span className="absolute  top-[-60px]">
           <Stayudpate />
           </span>
           
        <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start mt-52  md:mt-20 border-b-2 pb-5">
             {/* top div */}
             <div className="w-full md:w-[40%] mt-5">
                <h1 className="text-2xl md:text-3xl font-extrabold">SHOP.CO</h1>
                <p className="mt-2 text-sm">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                  <div className="flex space-x-2 mt-3 text-xl">
                         <FaTwitter />
                        <BsFacebook />
                       <FaInstagram />
                    <FaSquareGithub />
                  </div>
             </div>
             {/* bottom div */}
             <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-between md:place-items-center ">
                {/* box1 */}
             <div className="mt-4">
                <h2 className="text-xl">Company</h2>
                <ul className="space-y-1">
                    <li className="font-sans">About</li>
                    <li className="font-sans">Features</li>
                    <li className="font-sans">Works</li>
                    <li className="font-sans">Career</li>
                </ul>
             </div>
             {/* box 2 */}
             <div>
                <h2 className="text-xl mt-4">Help</h2>
                <ul  className="space-y-1">
                    <li className="font-sans">Customer Support</li>
                    <li className="font-sans">Delivery Details</li>
                    <li className="font-sans">Terms & Conditions</li>
                    <li className="font-sans">Privacy Policy</li>
                </ul>
             </div>
             {/* box3 */}
             <div className="space-y-1 mt-4">
                <h2 className="text-xl">FAQ</h2> <ul>
                    <li className="font-sans">Account</li>
                    <li className="font-sans">Manage Deliveries</li>
                    <li className="font-sans">Orders</li>
                    <li className="font-sans">Payments</li>
                </ul>
             </div>
             {/* box4 */}
           <div  className="space-y-1 mt-4">
                <h2 className="text-xl">Resources</h2>
                <ul>
                    <li className="font-sans">Free eBooks</li>
                    <li className="font-sans">Development Tutorial</li>
                    <li className="font-sans">How to - Blog</li>
                    <li className="font-sans">Youtube Playlist </li>
                </ul>
             </div>
             {/* complete */}
             </div>
            
        </div>
        <p className="text-xs mt-3 md:text-sm">Shop.co © Made by Anas Tariq Ali,  All Rights Reserved</p>
        
        </main>
    )
}