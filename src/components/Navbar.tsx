import { CurrencyDollarIcon, LightBulbIcon } from "@heroicons/react/16/solid";
import { StarIcon, TrophyIcon, TvIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
     lg:w-full
    md:w-[500px]
       w-screen
       
      scrollbar-hide 
        overflow-hidden
        overflow-x-scroll
        flex text-sm     rounded-md px-4  space-x-6 py-4 text-white transition-all duration-300 ${
          isSticky ? "bg-[#191A1A] sticky top-1 backdrop-blur z-50 " : ""
        }`}
    >
      <div
        className={`flex items-center space-x-2 
          text-[#1FB1C5] bg-[#192A2C] px-2 py-2 rounded-md
        `}
      >
        <StarIcon className="w-5 h-5" />
        <span>Top</span>
      </div>
      <div className="flex   hover:text-muted-foreground items-center space-x-2 ">
        <LightBulbIcon className="w-5 h-5" />
        <span className="text-nowrap">Tech & Science</span>
      </div>
      <div className="flex  hover:text-muted-foreground items-center space-x-2 ">
        <CurrencyDollarIcon className="w-5 h-5" />
        <span>Finance</span>
      </div>
      <div className="flex  hover:text-muted-foreground items-center space-x-2 ">
        <LightBulbIcon className="w-5 h-5" />
        <span className="text-nowrap">Arts & Culture</span>
      </div>
      <div className="flex   hover:text-muted-foreground items-center space-x-2 ">
        <TrophyIcon className="w-5 h-5" />
        <span>Sports</span>
      </div>
      <div className="flex  hover:text-muted-foreground items-center space-x-2 ">
        <TvIcon className="w-5 h-5" />
        <span>Entertainment</span>
      </div>
    </div>
  );
};

export default Navbar;
