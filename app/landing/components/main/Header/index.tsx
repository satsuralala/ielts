import SlideUpWhenVisible from "../animate_when_visible";
import HeaderMenu from "../Header_menu";
import ScholasticaMoodle from "../ScolosticalMoodle";

export default function Header() {
  return (
    <div className="relative h-[840px] bg-white-a700 bg-[url(/images/header-background.png)] bg-cover bg-no-repeat py-2.5 lg:h-auto md:h-auto">
      <div className="h-[680px]">
        <HeaderMenu />
      </div>
      <div className="flex justify-center lg:px-5 md:px-5 absolute bottom-0 left-[13%] top-44">
        <SlideUpWhenVisible from="left">
          <ScholasticaMoodle />
        </SlideUpWhenVisible>
      </div>
    </div>
  );
}
