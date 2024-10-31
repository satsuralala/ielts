"use server";
import { signIn } from "@/integration/auth-handler";

export const SignIn = async (data: any) => {
  await signIn("credentials", {
    ...data,
    redirectTo: "/dashboard",
  });
};
