import { HomeIcon, SearchIcon, LibraryIcon, LogInIcon } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="md:hidden  fixed bottom-0 left-0 right-0 bg-[#202222] text-white flex justify-between px-4  ">
      {/* Home Button */}
      <div className="flex flex-col items-center pt-2 border-t-4 border-white   ">
        <HomeIcon className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </div>

      {/* Discover Button */}
      <div className="flex flex-col items-center pt-2">
        <SearchIcon className="w-6 h-6" />
        <span className="text-xs">Discover</span>
      </div>

      {/* Library Button */}
      <div className="flex flex-col items-center pt-2">
        <LibraryIcon className="w-6 h-6" />
        <span className="text-xs">Library</span>
      </div>

      {/* Sign In Button */}
      <div className="flex flex-col items-center pt-2">
        <LogInIcon className="w-6 h-6" />
        <span className="text-xs">Sign In</span>
      </div>
    </div>
  );
};

export default BottomNav;
