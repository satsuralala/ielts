import { LoginResponse } from "@/models/auth";
import { BaseResponse } from "@/models/base";
import { CustomerModel } from "@/models/customer";
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import { apiClient } from "./service";

interface AuthResponse extends User {
  token: string;
  customer: CustomerModel;
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<AuthResponse | null> => {
        try {
          const result = (await apiClient
            .post<LoginResponse>(`/auth/login`, {
              email: credentials?.email,
              password: credentials?.password,
            })
            .then((res) => res.data)) as BaseResponse<AuthResponse>;

          if (!result || !result.body || !result.body.token) {
            return null;
          }

          return result.body;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  trustHost: true,
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user?.id;
        token.token = user?.token;
        token.customer = user?.customer; // Store customer here
      }
      return token;
    },
    async session({ session, token }) {
      (session.user as any) = {
        id: token?.id,
        token: token?.token,
        customer: token?.customer, // Explicitly set customer
      };
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
