"use client";
import Image from "next/image";
import { FC, useState } from "react";

type DesignCardProps = {
  title: string;
  instructor: string;
  startDate: string;
  endDate: string;
  price: string;
  image: string;
  profile: string;
};

const DesignCard: FC<DesignCardProps> = ({
  title,
  instructor,
  startDate,
  endDate,
  price,
  image,
  profile,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`box-border overflow-hidden bg-white border border-[#D0D5DD] rounded-[24px] flex flex-col items-start p-[2px] transition-all duration-500 max-w-[355px] ${
        isHovered ? "hover:bg-[#3F2BFF] hover:text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full h-auto justify-center items-center`}>
        <Image
          src={image} // Use the Image component
          alt={title}
          width={365}
          height={240}
          className="object-cover rounded-[23px] "
        />
      </div>
      <div className="flex flex-col items-start pr-4 pl-[30px] pb-[30px] pt-[30px] gap-[22px]  flex-none order-1 self-stretch">
        <div className="flex flex-col items-start p-0 gap-[4px] flex-none order-0">
          <p
            className={`font-bold text-[14px] leading-[21px] flex items-center ${
              isHovered ? "text-[#ffffff]" : "text-[#707070]"
            } w-full`}
          >
            Moodle Tutorials
          </p>
          <h3
            className={`font-bold text-[20px] leading-[26px] flex items-center ${
              isHovered ? "text-[#ffffff]" : "text-[#212121]"
            } w-[250px]`}
          >
            {title}
          </h3>
        </div>
        <div className="flex flex-col items-start p-0 gap-[20px]  flex-none order-1 self-stretch">
          <div className="relative w-[121.16px] h-[30px] flex-none order-0">
            <Image
              src={profile} // Use the Image component
              alt={instructor}
              width={30} // Specify width
              height={30} // Specify height
              className="absolute left-0 top-[calc(50%-15px)] rounded-[192px]"
            />
            <p
              className={`absolute w-[83.41px] h-[21px] left-[39.45px] top-[3.73px] font-medium text-[12px] leading-[21px] flex items-center ${
                isHovered ? "text-[#ffffff]" : "text-[#212121]"
              }`}
            >
              {instructor}
            </p>
          </div>
          <div className="flex flex-col items-start p-0 gap-3 flex-none order-1 self-stretch w-full">
            <div className="flex flex-row items-center p-0 gap-[3px]">
              <p
                className={`font-bold text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                Course start date:
              </p>
              <p
                className={`font-normal text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                {endDate}
              </p>
            </div>
            <div className="flex flex-row items-center p-0 gap-[3px] ">
              <p
                className={`font-bold text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                Course end date:
              </p>
              <p
                className={`font-normal text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                {endDate}
              </p>
            </div>
          </div>
        </div>
        <span
          className={`font-bold text-[20px] leading-[30px] flex items-center ${
            isHovered ? "text-[#D3FF24]" : "text-[#3F2BFF]"
          } flex-none order-2`}
        >
          {price}
        </span>
      </div>
    </div>
  );
};

export default DesignCard;
