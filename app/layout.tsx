import { Toaster } from "@/components/ui/sonner";
import { SessionConfig } from "@/config/provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marshal - English Learning",
  description:
    "Хэл сурах гэдэг төгсгөл нь үл харагдах далай биш бид таньд тусална",
  openGraph: {
    type: "website",
    // images: ["/og/image.png"],
    title: "Marshal - English Learning",
    description:
      "Хэл сурах гэдэг төгсгөл нь үл харагдах далай биш бид таньд тусална",
    siteName: "Marshal - English Learning",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,

  keywords: [
    "Англи хэл сурах",
    "English Learning",
    "English",
    "English for kids",
    "English for adults",
    "English for business",
    "English for travel",
    "English for study",
    "IELTS",
    "TOEFL",
    "TOEIC",
    "Cambridge",
    "IELTS preparation",
    "TOEFL preparation",
    "TOEIC preparation",
    "Cambridge preparation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionConfig>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={`${geistMono.className} antialiased`}>
          <Toaster position="top-center" />
          {children}
        </body>
      </html>
    </SessionConfig>
  );
}
