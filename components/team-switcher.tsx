"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href={"/dashboard/overall"}>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-full overflow-hidden bg-sidebar-primary text-sidebar-primary-foreground">
              <Image
                src={"/logo.jpg"}
                alt={"logo"}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="  overflow-hidden  font-semibold">
                Marshall Language School
              </span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
