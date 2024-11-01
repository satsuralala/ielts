import { LoadingSpinner } from "@/components/ui/loading";
import { auth } from "@/integration/auth-handler";
import { redirect } from "next/navigation";
import CourseClient from "./_components";

interface PageProps {
  params: {
    courseId: string;
  };
}

async function CourseIdPage({ params }: PageProps) {
  const session = await auth();

  if (!session) {
    return <LoadingSpinner />;
  }

  const { courseId } = await params;

  if (courseId !== "1") {
    redirect("/dashboard/course/1");
  }

  const sampleData = [
    { date: "2020-10-23", listen: 10, reading: 20, writing: 30, speaking: 40 },
    { date: "2020-10-24", listen: 15, reading: 25, writing: 35, speaking: 45 },
    { date: "2020-10-25", listen: 8, reading: 30, writing: 40, speaking: 50 },
  ];

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CourseClient data={sampleData} />
      </div>
    </div>
  );
}

export default CourseIdPage;
