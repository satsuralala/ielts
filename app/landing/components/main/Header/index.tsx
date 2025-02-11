import Image from "next/image";
import SlideUpWhenVisible from "../animate_when_visible";
import HeaderMenu from "../Header_menu";
import ScholasticaMoodle from "../ScolosticalMoodle";

export default function Header() {
  return (
    <div className="relative h-auto max-h-[650px]  md:max-h-[705px] bg-white-a700 bg-[url(/images/header-background.png)] bg-cover bg-no-repeat  ">
      <Image
        alt="gradient"
        src={"/images/gradient.svg"}
        width={800}
        height={40}
        className="z-50 max-w-[700px] "
      />
      <div className="h-[180px] w-[90%]">
        <HeaderMenu />
      </div>
      <div className="flex pl-10 lg:pl-12 xl:pl-12 2xl:pl-12 max-w-[1580px] w-full absolute bottom-0 top-44 left-1/2 -translate-x-1/2">
        <SlideUpWhenVisible from="left">
          <ScholasticaMoodle />
        </SlideUpWhenVisible>
      </div>
    </div>
  );
}
