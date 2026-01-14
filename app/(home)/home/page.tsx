import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Kbd } from "@/components/ui/kbd";
import {
  AlertCircle,
  Folder,
  FolderSymlink,
  LayoutGrid,
  List,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-fit">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Welcome to Home Drive</h2>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant={"outline"} size={"default"}>
              <Search /> Search <Kbd>⌘K</Kbd>
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <AlertCircle />
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Recent Activities</h2>
          <ButtonGroup>
            <ButtonGroup>
              <Button variant={"outline"}>
                <List />
              </Button>
              <Button variant={"outline"}>
                <LayoutGrid />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5">
          <Card>
            <CardContent>
              <div className="flex items-center gap-5">
                <Folder className="text-green-500" />
                <div>
                  <CardTitle>Vacation</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    Created by You • 2 hrs ago • 256 mb
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center gap-5">
                <FolderSymlink />
                <div>
                  <CardTitle>Camera</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    Shared by You • 2 days ago • 1.2 gb
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center gap-5">
                <FolderSymlink />
                <div>
                  <CardTitle>Photos</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    Shared with You • 5 days ago • 800 mb
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
