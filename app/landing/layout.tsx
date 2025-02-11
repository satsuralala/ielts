import { Inter } from "next/font/google";
import { Footer } from "./components/main/Footer";
import Header from "./components/main/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin", "cyrillic", "cyrillic-ext"] });

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

<Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={inter.className}>
        <div className="w-full overflow-hidden bg-white-a700">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
