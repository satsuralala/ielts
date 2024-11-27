"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  className?: string;
}

const SlideUpWhenVisible: React.FC<Props> = ({
  children,
  className,
  from = "bottom",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  const animationClass = (() => {
    switch (from) {
      case "left":
        return "translate-x-[-100%]";
      case "right":
        return "translate-x-[100%]";
      case "top":
        return "translate-y-[-100%]";
      case "bottom":
      default:
        return "translate-y-[100%]";
    }
  })();

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "transform transition-opacity delay-300 duration-500 ease-in-out",
        !inView ? "opacity-0" : "opacity-100"
      )}
    >
      <div
        className={cn(
          "transform transition-transform delay-300 duration-500",
          inView ? "translate-y-0 opacity-100" : `${animationClass} opacity-0`
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUpWhenVisible;
