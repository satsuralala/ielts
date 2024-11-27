import { COURSES } from "@/app/landing/lib/config";
import { Suspense } from "react";
import DesignCard from "./DesignCard";

export default function AvailableCoursesSection() {
  return (
    <div className="container-xs mx-auto flex flex-col items-center gap-5 mb-14">
      <h2 className="font-bold text-gray-900 text-2xl">Available courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Suspense fallback={<div>Loading feed...</div>}>
          {COURSES.map((course, index) => (
            <div key={"coursesGrid" + index}>
              <DesignCard
                title={course.title}
                instructor={course.instructor}
                startDate={course.startDate}
                endDate={course.endDate}
                price={course.price}
                image={course.image}
                profile={course.profile}
              />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
