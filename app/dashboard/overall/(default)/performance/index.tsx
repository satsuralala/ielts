import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { AxeIcon } from "lucide-react";

export const Performance = () => {
  return (
    <div className="flex items-center justify-between  flex-wrap">
      <Item title="Average Score" value="5.6" />
      <Item title="Total Test Taken" value="12" />
      <Item title="Average Time" value="34min" />
    </div>
  );
};

const Item = ({ title, value }: { title: string; value: string }) => (
  <Card className="basis-[32%] ">
    <CardHeader className=" pb-2 ">
      <div className="justify-items-center">
        <AxeIcon />
        <div className="mt-1 text-slate-800">{title}</div>
      </div>
    </CardHeader>
    <CardContent className=" text-center  text-slate-800 font-bold text-3xl ">
      {value}
    </CardContent>
  </Card>
);
