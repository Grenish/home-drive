import {
  Calendar,
  ChevronDown,
  Cloud,
  HardDrive,
  Home,
  LayoutGrid,
  List,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

// Menu items.
const navMain = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "My Drive",
    url: "#",
    icon: HardDrive,
  },
  {
    title: "Computers",
    url: "#",
    icon: Cloud,
  },
];

const navCollections = [
  {
    title: "Shared with me",
    url: "#",
    icon: Users,
  },
  {
    title: "Recent",
    url: "#",
    icon: List,
  },
  {
    title: "Starred",
    url: "#",
    icon: Star,
  },
];

const navSystem = [
  {
    title: "Trash",
    url: "#",
    icon: Trash2,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r-0 bg-sidebar">
      <SidebarHeader className="p-4">
        <h2 className="font-bold text-xl tracking-tight leading-loose">
          Home Drive
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    tooltip={item.title}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Collections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navCollections.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navSystem.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Storage used</span>
            <span>10%</span>
          </div>
          <Progress value={10} className="h-2" />
          <div className="text-xs text-muted-foreground">
            15 GB of 150 GB used
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
