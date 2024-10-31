import { SessionProvider } from "next-auth/react";

export const SessionConfig = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
