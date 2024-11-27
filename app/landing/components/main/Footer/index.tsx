import { DOCUMENTATIONS } from "@/app/landing/lib/config";
import { FC } from "react";

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <footer className="bg-indigo-a700 p-8 text-white-a700 font-light">
      <div className="container mx-auto flex justify-between">
        <div className="text-md">
          <h1 className="text-5xl font-bold mb-4">Good design is aesthetic.</h1>
          <p>RoseaThemes</p>
          <p>128 West 19rd Street, Floor 13</p>
          <p>New York, NY 10010</p>
        </div>
        <div className="text-md">
          <h1 className="text-lg font-bold mb-8">Learn how to use the theme</h1>
          <div className="flex flex-col gap-4">
            {DOCUMENTATIONS.map((doc, index) => (
              <div key={index}>
                <p>{doc}</p>
                <div className="w-full h-[2px] bg-[#ffffff40]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
