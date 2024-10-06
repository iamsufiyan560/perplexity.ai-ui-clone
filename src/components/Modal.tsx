import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaSliders } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import { Cpu } from "lucide-react";
import { Button } from "./ui/button";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="mr-8 mt-5 p-4 bg-[#2D2F2F] rounded-full">
          <FaSliders className="size-4" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#191a1a] sm:w-full w-[300px] rounded-lg ">
        <DialogHeader>
          <DialogTitle className="text-3xl border-b-2 pb-4">
            Make it yours
          </DialogTitle>
          <DialogDescription className="text-white font-medium text-base  pt-4">
            Select topics and interests to customize your Discover experience
          </DialogDescription>

          <div className="flex flex-wrap pt-4 gap-2 border-b-2 pb-4">
            <Badge
              className="flex gap-2 py-2 px-2 bg-[#192a2c]"
              variant="outline"
            >
              <Cpu className="w-4 h-4" />
              Tech & Science
            </Badge>
            <Badge
              className="flex gap-2 py-2 px-2  bg-[#192a2c]"
              variant="outline"
            >
              <Cpu className="w-4 h-4" />
              Finance
            </Badge>{" "}
            <Badge
              className="flex gap-2 py-2 px-2  bg-[#192a2c]"
              variant="outline"
            >
              <Cpu className="w-4 h-4" />
              Arts & Culture
            </Badge>{" "}
            <Badge
              className="flex gap-2 py-2 px-2  bg-[#192a2c]"
              variant="outline"
            >
              <Cpu className="w-4 h-4" />
              Sports
            </Badge>{" "}
            <Badge
              className="flex gap-2 py-2 px-2  bg-[#192a2c]"
              variant="outline"
            >
              <Cpu className="w-4 h-4" />
              Entertainment
            </Badge>
          </div>

          <div className="pt-2">
            <Button
              variant="secondary"
              className=" bg-[#20b8cd] hover:bg-[oklch(0.78_0.12_209.79)] rounded-full w-full "
            >
              {" "}
              Save intersted
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
