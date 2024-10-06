import {
  ArrowLeftToLine,
  ArrowRightToLine,
  LoaderPinwheel,
  LogIn,
  MoveUpRight,
  Plus,
  Radio,
  SearchCheck,
  Smartphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaDiscord } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { useState } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <aside
        className={`bg-[#202222]  hidden h-screen   md:block transition-[width] duration-300 ease-in-out sticky top-0 ${
          isCollapsed ? "md:w-20" : "md:w-[220px] lg:w-[280px]"
        }`}
      >
        <div className="flex h-full max-h-screen flex-col gap-2 relative">
          {/* Only show when not collapsed */}
          <div
            className={`transition-[opacity,visibility,height] duration-300 ease-in-out ${
              isCollapsed ? "opacity-0 invisible h-0" : "opacity-100 visible"
            }`}
          >
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <img src="/logo.png" className="h-10" />
              </Link>
              <Button
                title="Collapse"
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8"
                onClick={() => setIsCollapsed(true)}
              >
                <ArrowLeftToLine className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative flex items-center px-4">
              <Input
                className="rounded-full cursor-pointer focus:border-[oklch(0.72_0.12_209.79)] focus:border bg-gray-900 border-gray-800 text-gray-200"
                placeholder="New Thread"
              />
              <div className="absolute right-8 flex items-center gap-2 pointer-events-none">
                <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                  Ctrl
                </span>
                <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                  I
                </span>
              </div>
            </div>
          </div>

          <div
            className={`
            flex flex-col justify-center items-center space-y-
        ${!isCollapsed ? "opacity-0 invisible h-0" : "opacity-100 visible"}
          `}
          >
            <img src="/smalllogo.png" alt="" />

            <div className="p-4 flex justify-center">
              <Button
                title="New Thread"
                variant="ghost"
                size="icon"
                className="h-10 w-10 bg-muted rounded-full"
              >
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Navigation section */}
          <div className="flex-1">
            <nav
              className={` grid gap-4 items-start px-2 text-base font-medium lg:px-4 transition-[padding] duration-300 ease-in-out ${
                isCollapsed ? "px-2" : ""
              }`}
            >
              <Link
                title="Home"
                to="#"
                className={` flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 ease-in-out 
                ${isCollapsed ? "w-fit" : ""}
                `}
              >
                <SearchCheck className="h-6 w-6" />
                {!isCollapsed && (
                  <span className="transition-opacity duration-300">Home</span>
                )}
              </Link>

              <Link
                title="Discover"
                to="#"
                className={`hover:bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-primary 
                ${isCollapsed ? "w-fit" : ""}
                
                hover:text-primary transition-all duration-300 ease-in-out `}
              >
                <LoaderPinwheel className="h-6 w-6" />
                {!isCollapsed && (
                  <span className="transition-opacity duration-300">
                    Discover
                  </span>
                )}
              </Link>

              <Link
                title="Library"
                to="#"
                className={`hover:bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground 
                ${isCollapsed ? "w-fit" : ""}
                
                hover:text-primary transition-all duration-300 ease-in-out `}
              >
                <Radio className="h-6 w-6" />
                {!isCollapsed && (
                  <span className="transition-opacity duration-300">
                    Library
                  </span>
                )}
              </Link>
              <Link
                title="Sign In"
                to="#"
                className={`hover:bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground 
                ${isCollapsed ? "w-fit" : ""}
                
                hover:text-primary transition-all duration-300 ease-in-out `}
              >
                <LogIn className="h-6 w-6" />
                {!isCollapsed && (
                  <span className="transition-opacity duration-300">
                    Sign in
                  </span>
                )}
              </Link>
              <div
                className={`px-4 transition-[opacity,visibility] duration-300 ease-in-out ${
                  isCollapsed
                    ? "opacity-0 invisible h-0"
                    : "opacity-100 visible"
                }`}
              >
                <Button className="w-full rounded-full bg-[#20b8cd] hover:bg-[oklch(0.78_0.12_209.79)] transition-colors duration-200">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>

          {/* Card section - only show when not collapsed */}
          <div
            className={`border-b mt-auto transition-[opacity,visibility] duration-300 ease-in-out ${
              isCollapsed ? "hidden" : "opacity-100 visible p-4"
            }`}
          >
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Try Pro</CardTitle>
                <CardDescription>
                  Upgrade for image upload, smarter AI, and more Pro Search.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex justify-center gap-1 items-center 
                bg-muted hover:bg-gray-500 transition-colors duration-200"
                >
                  <MoveUpRight className="w-5 h-5" strokeWidth={2.25} />
                  <p>Learn More</p>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer section */}
          <div className="transition-[opacity,visibility] duration-300 ease-in-out">
            {!isCollapsed ? (
              <div className="flex items-center px-2 py-4 justify-between">
                <div className="flex gap-2">
                  <Smartphone className="w-5 h-5" />
                  <p>Download</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <RiTwitterXFill />
                  <FaDiscord size={18} />
                </div>
              </div>
            ) : (
              <div className="p-4 flex justify-center">
                <Button
                  title="Expand"
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 bg-muted rounded-full"
                  onClick={() => setIsCollapsed(false)}
                >
                  <ArrowRightToLine className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
