"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { columns } from "./columns";

interface CourseClientProps {
  data: never[];
}

const CourseClient: React.FC<CourseClientProps> = ({ data }) => {
  const session = useSession();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = session?.data?.user as any;

  return (
    <>
      <div className="flex items-center justify-between">
        <Link href="/exam.IELTSprep.mn">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Take the exam
          </Button>
        </Link>
        <Heading
          title={`username : ${user?.customer.email || ""}`}
          password={`${user?.customer.moodle_pwd || ""}`}
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default CourseClient;
