"use client";

import { Check, Copy, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface HeadingProps {
  title: string;
  password: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
    toast.success("Password copied to clipboard");
  };

  return (
    <div>
      <h2 className="text-lg font-bold tracking-tight">{title}</h2>
      <div className="flex items-center">
        <p className="text-lg font-bold tracking-tight">password :</p>
        <p className="text-lg font-bold tracking-tight ml-2">
          {showPassword ? password : password.replace(/./g, "*")}
        </p>
        {showPassword ? (
          <button
            onClick={() => {
              onCopy(password);
              setShowPassword(false);
            }}
            className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        ) : (
          <button
            onClick={() => setShowPassword(true)}
            className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <Eye size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
