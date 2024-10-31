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
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DashboardIcon } from "@radix-ui/react-icons";

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
          url: "#",
          icon: ChartArea,
        },
        {
          title: "Writing",
          url: "#",
          icon: NotebookPen,
        },
        {
          title: "Listening",
          url: "#",
          icon: FileAudio,
        },
        {
          title: "Reading",
          url: "#",
          icon: BookOpenText,
        },
        {
          title: "Speaking",
          url: "#",
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
        },
        {
          title: "Course #02",
          url: "#",
        },
        {
          title: "Course #03",
          url: "#",
        },
        {
          title: "Course #04",
          url: "#",
        },
        {
          title: "Course #05",
          url: "#",
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
          url: "#",
        },
        {
          title: "Video #02",
          url: "#",
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
      url: "#",
      icon: Wallet,
    },
    {
      name: "Plan History",
      url: "#",
      icon: History,
    },
    {
      name: "Help & Support",
      url: "#",
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
