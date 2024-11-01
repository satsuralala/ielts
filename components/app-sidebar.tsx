"use client";

import {
  BookIcon,
  BookOpenText,
  ChartArea,
  FileAudio,
  HelpCircleIcon,
  History,
  Newspaper,
  NotebookPen,
  Podcast,
  VideoIcon,
  Wallet,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DashboardIcon } from "@radix-ui/react-icons";
import { TeamSwitcher } from "./team-switcher";

const data = {
  user: {
    name: "Batbold Zorigoo",
    email: "burabatbold2@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: DashboardIcon,
      isActive: true,
      items: [
        {
          title: "Result",
          url: "/dashboard/overall",
          icon: ChartArea,
        },
        {
          title: "Writing",
          url: "/dashboard/overall/writing",
          icon: NotebookPen,
        },
        {
          title: "Listening",
          url: "/dashboard/overall/listening",
          icon: FileAudio,
        },
        {
          title: "Reading",
          url: "/dashboard/overall/reading",
          icon: BookOpenText,
        },
        {
          title: "Speaking",
          url: "/dashboard/overall/speaking",
          icon: Podcast,
        },
      ],
    },
  ],
  courses: [
    {
      title: "Courses",
      url: "/dashboard",
      icon: BookIcon,
      isActive: true,
      items: [
        {
          title: "Course #01",
          url: "/dashboard/course/1",
          disabled: false,
        },
        {
          title: "Course #02",
          url: "/dashboard/course/2",
          disabled: true,
          lockMessage: "Complete Course #01 to unlock",
        },
        {
          title: "Course #03",
          url: "/dashboard/course/3",
          disabled: true,
          lockMessage: "Complete Course #02 to unlock",
        },
        {
          title: "Course #04",
          url: "/dashboard/course/4",
          disabled: true,
          lockMessage: "Complete Course #03 to unlock",
        },
        {
          title: "Course #05",
          url: "/dashboard/course/5",
          disabled: true,
          lockMessage: "Complete Course #04 to unlock",
        },
      ],
    },
  ],
  lessons: [
    {
      title: "Lessons",
      url: "#",
      icon: VideoIcon,
      items: [
        {
          title: "Video #01",
          url: "/dashboard/lesson/1",
        },
        {
          title: "Video #02",
          url: "/dashboard/lesson/2",
        },
      ],
    },
  ],
  news: [
    {
      name: "News",
      url: "#",
      icon: Newspaper,
    },
  ],
  projects: [
    {
      name: "Wallet",
      url: "/dashboard/wallet",
      icon: Wallet,
    },
    {
      name: "Plan History",
      url: "/dashboard/plan-history",
      icon: History,
    },
    {
      name: "Help & Support",
      url: "/dashboard/help-support",
      icon: HelpCircleIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain title="Dashboard" items={data.navMain} />
        <NavMain title="Course" items={data.courses} />
        <NavMain title="Lesson" items={data.lessons} />
        <NavProjects projects={data.news} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
