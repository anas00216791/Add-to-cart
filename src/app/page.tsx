import FontShowcase from "@/components/Fonts";
import Hero from "@/components/Hero";
import Image from "next/image";
import Brands from "./brands/page";
import Link from 'next/link';
import Clothes from "./product/page";
export default function Home() {
  return (
    <div>
           <Hero/>
        <FontShowcase/>
        <Clothes/>
        <Brands/> 
      </div>
  );
}