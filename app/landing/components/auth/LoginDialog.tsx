"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useAuthStore } from "@/app/store/auth/ use-auth-store";

export default function LoginDialog() {
  const { isLoginOpen, setLoginOpen, switchToRegister, role, setRole } = useAuthStore();

  return (
    <Dialog open={ isLoginOpen} onOpenChange={ setLoginOpen}>
      <DialogTrigger asChild>
        <button
          className="flex whitespace-nowrap items-center justify-center gap-2 rounded-[18px] bg-[#d3ff24] md:px-4 px-2 py-2 text-center text-[12px] hover:bg-lime-400 transition-all duration-200 text-[#3F2BFF]"
         
        >
          <p className="whitespace-nowrap">Log in</p>
          <Image
            src={"/images/logout.svg"}
            alt="logout"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[581px] max-w-[500px] overflow-y-scroll p-0 rounded-3xl block">
        <DialogHeader className="relative py-16 rounded-t-3xl bg-[#3F2BFF] opacity-90 bg-[radial-gradient(rgba(255,255,255,0.1)_25%,transparent_25%)] [background-size:18px_18px] flex items-center flex-col justify-center">
          <DialogTitle className="flex items-center flex-col justify-center">
            <Image
              alt="logo"
              src={"/images/logo-removebg.png"}
              className="absolute md:w-44 md:h-44 w-36 h-36 "
              width={300}
              height={200}
            />
          </DialogTitle>
        </DialogHeader>
        <div className="bg-[#FFFFFF] p-14 rounded-b-3xl">
          <div className="mx-auto">
            <div className="flex bg-[#FAFAFA] rounded-3xl">
              <Button
                className={`p-7 w-full flex gap-4 rounded-3xl text-base shadow-none transition-all duration-300 ${
                  role === "student"
                    ? "bg-[#D3FF24] hover:bg-[#D3FF24] text-[#0D0D0D]"
                    : "bg-[#FAFAFA] text-[#0D0D0D] hover:bg-[#D3FF24]"
                }`}
                onClick={() => setRole("student")}
              >
                {/* <GraduationCap size={24} className="w-6 h-6 flex-shrink-0"/> */}
                <Image
                  src={"/images/hat.svg"}
                  className="w-6 h-6 flex-shrink-0"
                  width={24}
                  height={24}
                  alt="hat"
                />
                STUDENT
              </Button>
              <Button
                className={`py-7 w-full flex gap-4 rounded-3xl text-base shadow-none transition-all duration-300 ${
                  role === "teacher"
                    ? "bg-[#D3FF24] hover:bg-[#D3FF24] text-[#0D0D0D]"
                    : "bg-[#FAFAFA] text-[#0D0D0D] hover:bg-[#D3FF24]"
                }`}
                onClick={() => setRole("teacher")}
              >
                <Image
                  src={"/images/user.svg"}
                  className="w-6 h-6 flex-shrink-0"
                  width={24}
                  height={24}
                  alt="user"
                />
                TEACHER
              </Button>
            </div>
          </div>
          <p className="text-[#3F2BFF] text-4xl font-medium sm:mt-8 mt-6 font-sans">
            Log in
          </p>
          <p className="text-[#344054] text-base font-normal mt-3 font-sans">
            Welcome back! Please enter your details.
          </p>

          <div className="flex flex-col sm:mt-8 mt-6 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email" className="text-left text-[#344054]">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password" className="text-left text-[#344054s]">
                Password
              </Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex justify-between my-1">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember for 30 days
                </label>
              </div>
              <Link
                href={"/forgotpassword"}
                className="text-[#3F2BFF] font-sans font-bold text-sm"
              >
                Forgot password
              </Link>
            </div>
              <Button className="w-full bg-[#3F2BFF] text-[#D3FF24] font-sans rounded-lg">
                Sign in
              </Button>
            <div
              className={`flex gap-4 flex-col ${
                role === "teacher" ? "hidden" : "block"
              } transition-all duration-300`}
            >
              <Button className="bg-[#FFFFFF] text-[#344054] font-sans rounded-lg py-2.5">
                <Image
                  alt="fb-logo"
                  src={"/images/gmail.svg"}
                  width={6}
                  height={6}
                  className="w-6 h-6"
                />
                Sign in with Google
              </Button>
              <Button className="bg-[#FFFFFF] text-[#344054] font-sans rounded-lg py-2.5">
                <Image
                  alt="fb-logo"
                  src={"/images/fb.svg"}
                  width={6}
                  height={6}
                  className="w-6 h-6"
                />
                Sign in with Facebook
              </Button>
              <div className="flex justify-center gap-1 mt-3 items-center">
                <p className="font-sans">Don’t have an account?</p>
                <Link
                  href={""}
                  className="font-sans text-[#3F2BFF] font-bold text-sm"
                  onClick={() => switchToRegister()}
                >
                  Sign up
                </Link>
            </div>
              </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
