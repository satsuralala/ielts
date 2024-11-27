import "./landing.css";
import AvailableCoursesSection from "./landing/components/main/AvailableCources";
import { FaqSection } from "./landing/components/main/FaqSection";
import { Footer } from "./landing/components/main/Footer";
import Header from "./landing/components/main/Header";
import { ReviewSection } from "./landing/components/main/ReviewSection";
import { TeamSection } from "./landing/components/main/TeamSection";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden bg-white-a700">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div>{t("title")}</div> */}
        <AvailableCoursesSection />
        <div className="w-screen h-[2px] bg-gray-300"></div>
        <ReviewSection />
        <TeamSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
