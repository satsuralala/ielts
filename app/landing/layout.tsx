import { Inter } from "next/font/google";
import { Footer } from "./components/main/Footer";
import Header from "./components/main/Header";
const inter = Inter({ subsets: ["latin", "cyrillic", "cyrillic-ext"] });

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <div className="w-full overflow-hidden bg-white-a700">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
