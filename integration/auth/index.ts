import { signIn } from "next-auth/react";
import { apiClient } from "../service";

interface SignUpParams {
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export const AuthService = {
  signUp: async ({ email, password }: SignUpParams) => {
    try {
      const response = await apiClient.post("/auth/signup", {
        email,
        password,
      });
      console.log(response, "response");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async ({ email, password }: LoginParams) => {
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        throw new Error(response.error);
      }

      return response;
    } catch (error) {
      throw error;
    }
  },
};
