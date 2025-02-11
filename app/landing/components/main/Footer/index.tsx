import { DOCUMENTATIONS } from "@/app/landing/lib/config";
import { Facebook, Globe, Mail, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <footer className="bg-indigo-a700 p-8 md:p-16 text-white-a700 font-light">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between border-b-[1px] border-[#E1E1E1] pb-[50px]">
        <div className="text-md max-w-[400px]">
          <h1 className="bricolage-grotesque text-5xl font-bold mb-4">
            Good design is aesthetic.
          </h1>
          <p className="font-sans text-base">RoseaThemes</p>
          <p className="font-sans text-base">128 West 19rd Street, Floor 13</p>
          <p className="font-sans text-base">New York, NY 10010</p>
        </div>
        <div className="text-md ">
          <h1 className="font-sans text-lg font-bold mb-8">
            Learn how to use the theme
          </h1>
          <div className="flex flex-col gap-4">
            {DOCUMENTATIONS.map((doc, index) => (
              <div key={index}>
                <p>{doc}</p>
                <div className="w-full h-[2px] bg-[#ffffff40]"></div>
              </div>
            ))}
            <div className="flex flex-col">
              <a className="font-sans font-bold mb-8 text-base">
                More Premium Moodle Themes
              </a>
              <a className="text-[#F5F5F5]">Space 2.0 For Moodle 4.3</a>
              <a className="text-[#F5F5F5]">Monocolor and Universe</a>
            </div>
            <a className="text-[#D3FF24]">See all themes</a>
          </div>
         
        </div>
        <div className="flex flex-col text-start md:text-center">
            <a className="font-sans mb-8 text-base text-start lg:text-center">
              Privacy Policy
            </a>
            <a className="text-[#F5F5F5] underline underline-offset-2 text-start md:text-center">Terms of Service</a>
          </div>
      </div>
      <div className="container mx-auto flex flex-wrap gap-5 justify-between sm:mt-[50px] mt-[20px] ">
        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex 2xl:block">
          <p className="font-sans font-bold text-base">Copyright © 2024 Scholastica Premium Moodle Theme. All rights reserved.</p>
          <p>Premium Moodle Theme by RoseaThemes.</p>
        </div>
        <div >
          <div className="flex items-center gap-2.5 ">
            <div className="flex items-center gap-1"><Globe size={18} />Moodle Themes</div>
            <span className="flex items-center gap-1"><TabletSmartphone size={18} />Mobile:+12(34)00123-45678</span>
            <span className="flex items-center gap-1"><Mail size={18} />sample@mail.com</span>
          </div>
          <div className="flex items-center justify-start lg:justify-start xl:justify-end pt-4">
           <Image src={"/images/facebook.svg"} alt="fb" width={24} height={24} className="w-6 h-6"/>
           <Image src={"/images/x.svg"} alt="fb" width={24} height={24} className="w-6 h-6"/>
           <Image src={"/images/linkedIn.svg"} alt="fb" width={24} height={24} className="w-6 h-6"/>
          </div>

        </div>


      </div>
    </footer>
  );
};
