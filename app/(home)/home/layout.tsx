import { AppSidebar } from "@/components/home-components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator"; // Assuming you have this, otherwise remove
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CircleHelp, Search, Settings } from "lucide-react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
