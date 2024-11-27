import AvailableCoursesSection from "./components/main/AvailableCources";
import { FaqSection } from "./components/main/FaqSection";
import { ReviewSection } from "./components/main/ReviewSection";
import { TeamSection } from "./components/main/TeamSection";

export default function Home() {
  // const t = useTranslations("Home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>{t("title")}</div> */}
      <AvailableCoursesSection />
      <div className="w-screen h-[2px] bg-gray-300"></div>
      <ReviewSection />
      <TeamSection />
      <FaqSection />
    </main>
  );
}
