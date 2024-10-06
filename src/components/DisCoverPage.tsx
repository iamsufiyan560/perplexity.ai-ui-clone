import { LoaderPinwheel } from "lucide-react";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";
import Modal from "./Modal";
import SmallCard from "./SmallCard";

const DisCoverPage = () => {
  return (
    <div className="flex mb-20  flex-col w-full md:items-center items-start ">
      <main className=" flex flex-col gap-4">
        <div className="border-b h-20  flex justify-between items-center   w-full ">
          <div className="flex ml-4   items-center gap-2  ">
            <LoaderPinwheel className="md:h-8 md:w-8 w-6 h-6 mt-1" />
            <p className="md:text-3xl text-2xl font-normal">Discover</p>
          </div>
          <Modal />
        </div>

        <Navbar />
        <NewsCard imgUrl="https://pplx-res.cloudinary.com/image/upload/t_limit/v1728181218/getty_uploads/870140864.jpg" />
        <div className="flex md:flex-row flex-col gap-2 flex-wrap">
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728159268/server_uploads/vi1b0lmsv5dxvsel6rjg.jpg"
            }
          />
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727980811/server_uploads/uzcoepdk5vvrq2tf74ha.jpg"
            }
          />
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727981322/getty_uploads/1164279583.jpg"
            }
          />
        </div>

        <NewsCard imgUrl="https://pplx-res.cloudinary.com/image/upload/t_limit/v1727773772/getty_uploads/2174798150.jpg" />
        <div className="flex md:flex-row flex-col gap-2 flex-wrap">
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727987295/user_uploads/fwcqpgmox/io.jpg"
            }
          />
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728079780/server_uploads/i53asemb7bsbxkuwyp5g.jpg"
            }
          />
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728084228/server_uploads/flufhg12bxk6rso1ytgk.webp"
            }
          />
        </div>
        <NewsCard imgUrl="https://pplx-res.cloudinary.com/image/upload/t_limit/v1726956029/getty_uploads/2135840737.jpg" />
        <div className="flex md:flex-row flex-col gap-2 flex-wrap">
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728084228/server_uploads/flufhg12bxk6rso1ytgk.webp"
            }
          />
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728085119/server_uploads/q3wrjith5m5fmz8axkja.webp"
            }
          />
          <SmallCard
            imgUrl={
              "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728095971/server_uploads/qv5bcbex2f1ghfbf6sgp.jpg"
            }
          />
        </div>
      </main>
    </div>
  );
};

export default DisCoverPage;
