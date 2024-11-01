import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

      <SessionProvider>
      <html lang="en">
        <body>
          <section aria-label="Notifications alt+T" tabIndex={-1}>
            {children}
          </section>
        </body>
      </html>
    </SessionProvider>
  );
}
