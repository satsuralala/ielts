"use client";

import {
  BookOpenText,
  ChartArea,
  ChartNoAxesColumn,
  FileAudio,
  GalleryVerticalEnd,
  HelpCircleIcon,
  History,
  Mic,
  NotebookPen,
  Podcast,
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
  teams: [
    {
      name: "IELTS PRE",
      logo: GalleryVerticalEnd,
      plan: "PREMIUM",
    },
  ],
  navMain: [
    {
      title: "Overall",
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
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
