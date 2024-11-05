"use server";
import { signOut } from "@/integration/auth-handler";

export const SignOut = async () => {
  await signOut({
    redirectTo: "/auth/login",
  });
};
