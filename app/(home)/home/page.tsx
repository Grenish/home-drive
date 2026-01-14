"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Kbd } from "@/components/ui/kbd";
import {
  AlertCircle,
  FileIcon,
  Folder,
  FolderSymlink,
  ImageIcon,
  LayoutGrid,
  List,
  Search,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";

const recentActivities = [
  {
    name: "Vacation",
    type: "Folder",
    icon: Folder,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    owner: "You",
    modified: "2 hrs ago",
    size: "256 MB",
  },
  {
    name: "Camera",
    type: "Folder",
    icon: FolderSymlink,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    owner: "Shared",
    modified: "2 days ago",
    size: "1.2 GB",
  },
  {
    name: "Photos",
    type: "Folder",
    icon: FolderSymlink,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    owner: "Shared",
    modified: "5 days ago",
    size: "800 MB",
  },
];

const suggestedFiles = [
  {
    name: "Vacation",
    type: "Folder",
    icon: Folder,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    owner: "You",
    modified: "2 hrs ago",
    size: "256 MB",
  },
  {
    name: "Camera",
    type: "Folder",
    icon: FolderSymlink,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    owner: "Shared",
    modified: "2 days ago",
    size: "1.2 GB",
  },
  {
    name: "Photos",
    type: "Folder",
    icon: FolderSymlink,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    owner: "Shared",
    modified: "5 days ago",
    size: "800 MB",
  },
  {
    name: "clean_data.csv",
    type: "File",
    icon: FileIcon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    owner: "You",
    modified: "6 days ago",
    size: "10 MB",
  },
  {
    name: "WA20221806134.png",
    type: "Image",
    icon: ImageIcon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    owner: "You",
    modified: "5 days ago",
    size: "1506 kb",
  },
  {
    name: "Math Lectures",
    type: "Folder",
    icon: FolderSymlink,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    owner: "Shared",
    modified: "7 days ago",
    size: "25 MB",
  },
  {
    name: "data.pdf",
    type: "File",
    icon: FileIcon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    owner: "You",
    modified: "10 days ago",
    size: "2 MB",
  },
];

export default function Home() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-fit p-2">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Welcome to Home Drive
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="default"
            className="w-80 justify-between bg-muted/30 border-border/60 hover:bg-muted/50 hover:border-border transition-all duration-200 text-muted-foreground font-normal"
          >
            <span className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search
            </span>
            <Kbd className="bg-background/50 border-border/50 text-[10px] h-5">
              ⌘K
            </Kbd>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <AlertCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Recent Activities Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-foreground/90">
              Recent Activities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentActivities.map((item, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 border-border/50 bg-card/50 hover:bg-card"
              >
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base font-medium leading-none group-hover:text-primary transition-colors">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-xs flex items-center gap-2">
                        <span>{item.owner}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                        <span>{item.modified}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                        <span>{item.size}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Suggested Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-foreground/90">
              Suggested for you
            </h2>
            <div className="flex items-center gap-1 bg-muted/30 p-1 rounded-lg border border-border/40">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLayout("list")}
                className={`h-8 w-8 transition-all ${
                  layout === "list"
                    ? "bg-background shadow-sm text-foreground"
                    : "hover:bg-background shadow-none hover:shadow-sm text-muted-foreground"
                }`}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLayout("grid")}
                className={`h-8 w-8 transition-all ${
                  layout === "grid"
                    ? "bg-background shadow-sm text-foreground"
                    : "hover:bg-background shadow-none hover:shadow-sm text-muted-foreground"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {layout === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestedFiles.map((item, index) => (
                <Card
                  key={index}
                  className="group transition-all duration-300 border-border/50 bg-card/50 hover:bg-card"
                >
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-base font-medium leading-none group-hover:text-primary transition-colors">
                          {item.name}
                        </CardTitle>
                        <CardDescription className="text-xs flex items-center gap-2">
                          <span>{item.owner}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                          <span>{item.modified}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                          <span>{item.size}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="border rounded-lg bg-card/50">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[40%]">Name</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suggestedFiles.map((item, index) => (
                    <TableRow
                      key={index}
                      className="group hover:bg-muted/50 cursor-pointer"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${item.bgColor} ${item.color}`}
                          >
                            <item.icon className="h-4 w-4" />
                          </div>
                          <span>{item.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.owner}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.modified}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.size}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
