import { AiOutlineMail } from "react-icons/ai";

export default function Stayudpate(){
    return(
        <main className="w-full flex justify-center items-center mb-14">
            <div className="w-[90%] md:w-full md:h-[150px] rounded-[20px] p-10 bg-black flex flex-col md:flex-row justify-between items-center">
                {/* left */}
                <div className="w-full lg:w-[600px] ">
                <h1 className="text-2xl text-white md:text-3xl font-serif font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

                </div>
                {/* right */}
                <div className="space-y-4 mt-2">
                <div className="  flex justify-start items-center bg-[#F0F0F0] md:w-[300px] h-[35px] pl-2 md:ml-0 hover:border-none rounded-full text-xl"> <AiOutlineMail /> <input   placeholder={`Enter your email address`}  className="bg-[#F0F0F0] w-[90%] rounded-full h-full  ml-2"/></div>
                <button className="w-full  text-sm border bg-white py-2 px-10 rounded-[20px]" >Subscribe to Newsletter</button>

                </div>
            </div>
        </main>
    )
}