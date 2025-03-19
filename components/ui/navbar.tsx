import Image from "next/image";
import { House, Star, Heart, CircleUserRound } from "lucide-react";
import { NavbarElement } from "./navbarelement";

export default function Page() {
  return (
    <div className="flex h-20 w-full items-center justify-between bg-gradient-to-r from-blue-900 to-blue-700 px-6 shadow-md">
      {/* Logo & App Name */}
      <div className="flex items-center space-x-4">
        <Image src="/tray.png" alt="Food Logo" width={50} height={50} priority />
        <h1 className="text-white text-2xl font-bold">Recipe Roots</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <NavbarElement Icon={House} title="Home" />
        <NavbarElement Icon={Star} title="Top Picks" />
        <NavbarElement Icon={Heart} title="Favorites" />
        <NavbarElement Icon={CircleUserRound} title="Login" />
      </div>
    </div>
  );
}
