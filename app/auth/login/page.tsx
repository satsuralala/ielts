import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "./form";

export const metadata: Metadata = {
  title: "Login - Marshall Language School",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email, password below to sign in
        </p>
      </div>
      <LoginForm />
      <div className="text-xs flex gap-2 items-center">
        <div> You don't have an account?</div>
        <Link href={"/auth/signup"}>
          <Button variant="link" className="text-xs p-0">
            Click here to Sign Up
          </Button>
        </Link>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </>
  );
}
