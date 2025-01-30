import { FaStar, FaRegStar } from 'react-icons/fa'; // Import icons from FontAwesome via react-icons

import Image from "next/image"
import Link from 'next/link';

export default function Brands(){
    return (
        <main id='brands' className='mt-28'>   
         <div className="w-full  flex justify-center items-center mt-10 mb-1  max-w-screen-2xl mx-auto ">
            {/* container */}
            <div className="w-[90%] md:w-[80%] bg-[#F0F0F0] p-3 md:p-0 rounded-[20px] ">
                
                <div className="flex justify-center  items-center">
                    <h1 className="text-black text-2xl md:text-4xl  font-extrabold pt-4">BROWSE BY DRESS STYLE</h1> 
                </div>
               {/* boxes container */}
               <Link href={"/products"}>
               <div className=' flex flex-col lg:flex-row lg:flex-wrap justify-center items-center  mt-7   '>
                     <div className='relative bg-white w-[90%] lg:w-[350px] h-[250px] mt-4 md:mt-0 rounded-[20px]'>
                        <h1 className='absolute left-10 top-8 text-xl font-bold'>Casual</h1>
                        <Image src={"/dressstyle3.png"} className='w-[500px] h-full rounded-[20px]' width={500}  height={200} alt='images'></Image>
                     </div>
                     <div className='relative bg-white w-[90%] lg:w-[550px] h-[250px] mt-4 md:mt-0 md:ml-4 rounded-[20px]'>
                        <h1 className='absolute left-10 top-8 text-xl font-bold'>Formal</h1>
                        <Image src={"/dressstyle.png"} className='w-[700px] h-full rounded-[20px]' width={700}  height={200} alt='images'></Image>

                     </div>
                     <div className='relative bg-white w-[90%] lg:w-[550px] h-[250px] mt-2 rounded-[20px]'>
                        <h1 className='absolute left-10 top-8 text-xl font-bold'>Party</h1>
                        <Image src={"/dressstyle1.png"} className='w-[700px] h-full rounded-[20px]' width={700}  height={200} alt='images'></Image>

                     </div>
                     <div className='relative bg-white w-[90%] lg:w-[350px] h-[250px]  mt-2 md:ml-4 rounded-[20px]'>
                        <h1 className='absolute left-10 top-8 text-xl font-bold'>Gym</h1>
                        <Image src={"/dressstyle2.png"} className='w-[500px] h-full rounded-[20px]' width={700}  height={200} alt='images'></Image>

                     </div>
                     
               </div>
               </Link>


            </div>
           </div>
         </main>
    )
}