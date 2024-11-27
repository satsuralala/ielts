import { REVIEWS } from "@/app/landing/lib/config";
import { FC } from "react";
import Marquee from "react-fast-marquee";

export const ReviewSection: FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-16 py-20">
      <div className="overflow-hidden w-full">
        <Marquee
          direction="right"
          pauseOnHover
          gradient
          gradientColor="white"
          gradientWidth="50px"
          className="flex gap-8 items-start"
        >
          {REVIEWS.map(({ review, author, company }, index) => (
            <div
              className="w-[300px] text-center flex-shrink-0 duration-200 ease-in-out"
              key={index}
            >
              <h1 className="text-2xl font-light mb-4">"{review}"</h1>
              <h2 className="text-sm font-bold">{author}</h2>
              <p className="text-xs font-light text-gray-700">{company}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-300"></div>
      <div className="w-full aspect-[2] rounded-xl relative">
        <video
          src="https://www.pexels.com/download/video/2795164/"
          autoPlay
          loop
          muted
          className="object-cover top-0 left-0 w-full h-full absolute rounded-xl"
        ></video>
        <div className="w-full h-full p-16 flex flex-col justify-center text-white-a700">
          <p className="z-10 mb-4">RoseaThemes Tutorials</p>
          <h1 className="z-10 text-4xl font-bold mb-4">
            Moodle developer course for beginners
          </h1>
          <p className="z-10 text-xl">
            Video by{" "}
            <a
              href="https://www.pexels.com/video/a-man-and-a-woman-having-a-discussion-2795164/"
              className="underline"
            >
              cottonbro studio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
