import { PRICES } from "@/app/landing/lib/config";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

const PriceSection = () => {
  return (
    <div className="w-full lg:max-h-[912px] h-auto">
      <div className="bg-[#D3FF24] bg-[radial-gradient(#f0f0f0_3%,transparent_50%)] [background-size:20px_20px] flex items-center flex-col justify-center">
        <h1 className="bricolage-grotesque text-4xl font-bold md:pt-[72px] pt-[35px]">
          Price Plan
        </h1>
        <div className="flex flex-wrap gap-[58px] md:py-20 py-10 justify-center px-20">
          {PRICES.map((price, index) => (
            <div
              key={index}
              className={`w-full flex items-center flex-col md:w-1/2 lg:w-1/4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg scale-100`}
            >
              <div
                style={{ backgroundColor: price.color }}
                className="px-4 text-[#FFFFFF] font-mediums py-[9px] rounded-tl-xl text-base rounded-tr-xl"
              >
                {price.title.toUpperCase()}
              </div>

         
              <div
                style={{ backgroundColor: price.color }}
                className="w-full pt-[6px] rounded-2xl group" 
              >
                <div
                  className="inset-0 px-8 group-hover:bg-[#3F2BFF] bg-[#FCFCFD] rounded-2xl sm:py-14 py-6"
                >
                  <h3
                    className="text-3xl font-bold font-sans text-[#3F2BFF] text-center group-hover:text-[#FFFFFF]"
                  >
                    {price.price.toLocaleString()}₮
                  </h3>
                  <div className="flex justify-center">
                    <Image
                      alt="points"
                      src={"/images/point.svg"}
                      width={23}
                      height={23}
                      className="w-6 h-6"
                    />
                    <p className="text-base font-normal font-sans text-black text-center group-hover:text-[#FFFFFF]">
                      {price.points} Points
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-outside space-y-5 py-6">
                    {price.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-base font-sans gap-2 text-[#42526B]"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#E7F5E8] flex items-center justify-center">
                          <Check size={14} color="#0F9918" />
                        </div>
                        <p className="flex-1 group-hover:text-[#FFFFFF]">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className=" bg-[#D3FF24] text-black py-[17px] w-full rounded-3xl group-hover:bg-[#FCFCFD]"
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PriceSection;
