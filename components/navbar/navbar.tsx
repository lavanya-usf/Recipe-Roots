"use client";
import Image from "next/image";
import { House, Star, Heart, CircleUserRound, Menu, X } from "lucide-react";
import { NavbarElement } from "../ui/navbarelement";
import {useState} from 'react'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative flex h-20 w-full items-center justify-between bg-gradient-to-r from-blue-900 to-blue-700 px-6 shadow-md z-50">
      <div className="flex items-center space-x-4">
        <Image src="/tray.png" alt="Food Logo" width={50} height={50} priority />
        <h1 className="text-white text-2xl font-bold">Recipe Roots</h1>
      </div>

      <div className="hidden md:flex space-x-8">
        <NavbarElement Icon={House} title="Home" />
        <NavbarElement Icon={Star} title="Top Picks" />
        <NavbarElement Icon={Heart} title="Favorites" />
        <NavbarElement Icon={CircleUserRound} title="Login" />
      </div>



      <button 
        className="md:hidden text-white hover:text-gray-700 transition duration-300" 
        onClick = {()=> {setMenuOpen(!menuOpen)}}
        >
        {menuOpen? <X/> : <Menu/>}
      </button>

      {
        menuOpen && (
          <div className="absolute top-0 right-0 w-48 bg-blue-950 text-white rounded-lg shadow-lg flex flex-col p-4 z-50 md:hidden"> 
            <button
            className="self-end mb-2 text-white hover:text-gray-700"
            onClick={()=> {setMenuOpen(false)}}
            >
              <X/>
            </button>
            <NavbarElement Icon={House} title="Home" />
            <NavbarElement Icon={Star} title="Top Picks" />
            <NavbarElement Icon={Heart} title="Favorites" />
            <NavbarElement Icon={CircleUserRound} title="Login" />
          </div>
        )
      }


    </div>
  );
}
