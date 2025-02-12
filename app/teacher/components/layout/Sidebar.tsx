"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, sidebarLinks } from "./Statics";

export default function Sidebar() {
  const pathname = usePathname();
  

  return (
    <div>
      {/* nav */}
      <div className="flex gap-2 items-center ">
        <Link href={"/"} className="text-[var(--gray_600)] font-medium text-sm">
          Home
        </Link>
        <ChevronRight size={16} color="#D0D5DD" />
        <Link href={"/"} className="text-[var(--gray_600)] font-medium text-sm">
          {navItems[pathname] || "My Profile"}
        </Link>
      </div>
      {/* sidebar */}
      <div className="w-full flex gap-16 mt-12 ">
        <div className="border-[1px] flex-1 border-[var(--gray_200)] relative rounded-3xl p-4 w-[350px] flex flex-col gap-6 ">
          <div className="flex flex-col gap-6 items-center">
            <Image
              alt="profile"
              src={"/images/image.png"}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover "
            />
            <div className="w-6 h-6 bg-[#3F2BFF] rounded-full flex justify-center items-center absolute top-[90px] left-[55%]  ">
              <Image
                alt="camere"
                width={12}
                height={12}
                className="w-4 h-4"
                src={"/images/camera.png"}
              />
            </div>
            <div>
              <p className="font-semibold text-2xl text-[#101828]">Lkhamaa.B</p>
              <p className="font-normal text-base text-[#475467] text-center">
                Teacher
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center p-2 sm:p-4 gap-2.5 hover:bg-[#3F2BFF] group hover:text-[#FFFFFF] text-[#1D2939] text-sm font-medium"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
