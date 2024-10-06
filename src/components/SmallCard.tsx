import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BookmarkIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ImageComponentProps {
  imgUrl: string;
}

const SmallCard: React.FC<ImageComponentProps> = ({ imgUrl }) => {
  return (
    <Link to="news-details">
      <Card
        className="mx-4
        md:w-[200px]
        md:h-[390px]
        cursor-pointer bg-[#202222] rounded-lg shadow-lg overflow-hidden"
      >
        {/* Image Section */}
        <div className="relative h-48 ">
          <img
            src={imgUrl}
            alt="Pink Floyd"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <CardContent className="px-4">
          <CardTitle className="text-base font-bold text-white">
            Pink Floyd Sold for $400M
          </CardTitle>
          <CardDescription className="text-[#909191] font-semibold text-sm">
            According to reports from the Financial Times and Variety, legendary
            likeness...
          </CardDescription>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="px-4 flex justify-between items-center">
          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="https://example.com/author-avatar.jpg"
                alt="stephenhoban"
              />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <span className="text-sm text-[#909191] font-semibold">
              stephenhoban
            </span>
          </div>

          {/* Bookmark Icon */}
          <BookmarkIcon className="w-5 h-5 text-gray-400" />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SmallCard;
