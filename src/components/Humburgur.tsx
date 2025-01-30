"use client"
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const SHEET_SIDES = [ "right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className=" gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} >
          <SheetTrigger asChild className="lg:hidden">
            <TiThMenu/>
          </SheetTrigger >
          <SheetContent side={side}>
            <SheetHeader>
              
            </SheetHeader>
             {/* navigation bar */}
             <ul>
             <li className=" grid grid-cols-1 space-y-5 place-items-start">   
                   <Link href={`/`}>Home</Link>
                    <Link href={"/products"} >Products</Link>
                    <Link href={"/brands"}> Brands</Link>
                </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}