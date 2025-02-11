import { TEAM_MEMBER, UNIVERSITIES } from "@/app/landing/lib/config";
import Image from "next/image";
import { FC, Suspense } from "react";
import { TeamMemberCard } from "./Card";

export const TeamSection: FC = () => {
  return (
    <section className="items-center bg-gray-50 py-20 lg:py-16 md:py-12 sm:py-8 w-screen">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="bricolage-grotesque text-4xl font-bold text-gray-900 lg:text-3xl md:text-2xl sm:text-xl">
          Our teachers
          </h2>
          <p className="font-sans text-lg text-gray-700 mt-4 lg:text-base md:text-sm sm:text-xs animate-fade-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum sed arcu non mollis. Suspendisse non semper nulla. Ut dapibus tortor in diam porta, ut rhoncus eros malesuada.{" "}
          </p>
        </header>

        {/* Team Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Suspense fallback={<div>Loading team members...</div>}>
            {TEAM_MEMBER.map((member, index) => (
              <TeamMemberCard key={`team-member-${index}`} {...member} />
            ))}
          </Suspense>
        </div>

        
      </div>
    </section>
  );
};
