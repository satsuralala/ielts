"use client";

import { MENU_ITEMS } from "@/app/landing/lib/config";
import { AlignJustify} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HamburerMenu from "../modile_menu";
import LoginDialog from "../../auth/LoginDialog";
import RegisterDialog from "../../auth/RegisterDialog";

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <header className="left-0 right-0 top-7 overflow-hidden w-[95%] md:w-[90%] mx-auto rounded-2xl shadow-xs bg-indigo-a700 backdrop-blur-md container fixed px-4 py-2 z-20">
      {/* Desktop Menu */}
      <div className="md:flex items-center justify-between hidden">
        <div className="flex items-center gap-2.5 shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={85}
              height={33}
              className="ml-4 w-20 h-8 object-contain shrink-0"
            />
          </Link>
          <div className="flex items-center gap-4 ">
            {MENU_ITEMS.map((item, index) => (
              <div
                className="px-2.5 py-1.5 text-[14px] whitespace-nowrap text-[#D3FF24] hover:rounded-[16px] hover:bg-gray-100/90 hover:text-gray-900 transition-all duration-200 cursor-pointer md:text-sm"
                key={index}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-[18px]">
          <div className="lg:block hidden">
            <p className="text-xs font-normal whitespace-nowrap text-white-a700 font-bricolage">
              Scholastica (1.0.0) is here!
            </p>
            <p className="text-xs font-normal whitespace-nowrap text-[#D3FF24] font-sans">
              Get this theme today!
            </p>
          </div>
          <div className="h-[16px] w-px bg-white-a700_a5 hidden md:block"></div>
          <RegisterDialog/>
          <LoginDialog/>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between">
        <div className="flex items-center gap-1">
          <AlignJustify
            className="w-6 h-6 text-white-a700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={85}
              height={33}
              className="ml-2 md:ml-4 w-16 md:w-20 h-6 md:h-8 object-contain"
            />
          </Link>
        </div>
        <div className="flex gap-1">
          <RegisterDialog/>
          <LoginDialog/>
        </div>
      </div>

      {isMenuOpen && (
        <HamburerMenu open={isMenuOpen} onOpenChange={setIsMenuOpen} />
      )}
    </header>
  );
}