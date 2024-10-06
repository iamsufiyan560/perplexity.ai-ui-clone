import { GitForkIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";

const Search = () => {
  return (
    <div
      className="fixed bottom-16 p-1 left-1  md:left-auto    bg-[#202222] rounded-full 
      
    md:w-[400px] lg:w-[600px] w-screen"
    >
      <div
        className="  rounded-full px-4 py-2 mx-auto flex items-center gap-3
      
      border-2 border-[#333536]
      "
      >
        <Input
          placeholder="Ask follow-up"
          className="flex-1  bg-[#202222] border-none 
         focus-visible:ring-transparent 
          h-12 text-[#7a7e7e]
          placeholder:text-[#7a7e7e] placeholder:text-lg"
        />
        <div className="flex items-center gap-2">
          <Switch
            className="
            outline-1 outline outline-gray-400
          data-[state=unchecked]:bg-[#202222]
          [&>span]:bg-[#8d9191]
          data-[state=checked]:bg-muted"
          />
          <span className="text-sm font-medium">Pro</span>
          <div className="w-px h-6 bg-border mx-2" />
          <button className="p-2 hover:bg-muted bg-[#2e2f2e]  rounded-full">
            <GitForkIcon className="w-5 h-5 text-[#515353]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
