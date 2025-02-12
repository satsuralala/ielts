import { Button } from "@/components/ui/button";
import Sidebar from "../components/layout/Sidebar";
import {SKILLS } from "../components/layout/Statics";

const Dashboard = () => {
  return (
    <div className="mt-[136px] w-[95%] md:w-[90%] mx-auto container flex md:gap-14">
      <Sidebar />
      <div className="pt-16 flex flex-col gap-8 rounded-xl">
        <p className="text-[#1D2939] font-medium text-3xl">My Dashboard</p>
        {/* table1 */}
        <div className="bg-[#FAFAFA] border-[#EAECF0] border-[1px] p-8 rounded-xl ">
          <p className="text-[#1D2939] font-medium text-2xl">New evaluation</p>
          <div>
            {SKILLS.map((skill) => (
              <Button key={skill.label} className="py-4 px-7 bg-[#FAFAFA] shadow-none text-[#0D0D0D] hover:bg-[#D3FF24] rounded-3xl transition-all ease-in-out duration-200">{skill.icon}{skill.label}</Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
