import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" my-10 bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[90vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="container mx-auto">
        <div className="w-full h-full rounded-lg flex justify-center items-center ">
          <div className="max-w-7xl mx-auto px-6 text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
              Turn Ideas into Stunning AI Art
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl text-center text-gray-200">
              Generate high-quality images from simple text prompts.
            </p>

            <div className="flex justify-center items-center gap-4">
              <Link href="#">
                <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                  Generate Now
                </Button>
              </Link>

              <Link href="/pricing">
                <Button variant="outline" className="text-white">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
