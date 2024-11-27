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
          <h2 className="font-bricolagegrotesque text-4xl font-bold text-gray-900 lg:text-3xl md:text-2xl sm:text-xl">
            Meet our Team
          </h2>
          <p className="font-bricolagegrotesque text-lg text-gray-700 mt-4 lg:text-base md:text-sm sm:text-xs animate-fade-in">
            It prepares them to thrive in today’s world — and to shape
            tomorrow’s. Apple is constantly creating resources to help educators
            do just that. Not only powerful products, but also tools,
            inspiration, and curricula to create magical learning experiences
            and make every moment of screen time worth it.{" "}
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

        <div className="text-center flex flex-col items-center gap-4">
          <h1>Universities all around the world love my Moodle Templates.</h1>
          <p className="text-xs font-extralight">
            Trusted by hundreds of customers
          </p>
          <div className="flex justify-between gap-6">
            {UNIVERSITIES.map((university, index) => (
              // <img
              //   src={university}
              //   key={index}
              //   className="grayscale h-12"
              // ></img>
              <Image
                src={university} // Use the Image component
                key={index}
                alt={`University logo ${index}`} // Add alt text for accessibility
                className="grayscale h-12"
                width={100} // Specify width
                height={50} // Specify height
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
