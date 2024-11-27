"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { MENU_ITEMS } from "../../lib/config";

const HamburerMenu = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="text-black pb-16">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className=" text-black px-4 space-y-4 flex flex-col justify-around">
          <div className="flex items-start gap-4 flex-col justify-start mt-10">
            {MENU_ITEMS.map((item, index) => (
              <Link
                className="px-2.5 py-1.5 text-[14px] text-lime-400 hover:text-gray-900 transition-all duration-200 bg-indigo-a700 rounded-[16px] "
                href={item.href}
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburerMenu;
