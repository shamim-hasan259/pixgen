import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaDownload,
  FaTag,
  FaRobot,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";

export const metadata = {
  title: "Pixgen --PhotoDetails",
};

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://ai-photo-teal.vercel.app/data.json");
  const photos = await res.json();
  const photo = await photos.find((p) => p.id == id);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow overflow-hidden">
        {/* 🖼️ Image Section */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">
          {/* 🔙 Back Button */}
          <Link
            href="/"
            className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-full hover:bg-black transition"
          >
            <FaArrowLeft />
            Back
          </Link>

          <Image
            src={photo?.imageUrl}
            alt={photo?.title}
            fill
            className="object-cover"
          />
        </div>

        {/* 📄 Details */}
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {photo?.title}
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-6">
            {photo?.prompt}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base mb-6">
            <p className="flex items-center gap-2">
              <FaTag /> {photo?.category}
            </p>
            <p className="flex items-center gap-2">
              <FaRobot /> {photo?.model}
            </p>
            <p>{photo?.resolution}</p>
            <p className="flex items-center gap-2 col-span-2 md:col-span-1">
              <FaCalendarAlt />{" "}
              {new Date(photo?.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {photo?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-gray-200 rounded-full text-sm capitalize"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-6">
            <div className="flex gap-6 text-lg">
              <p className="flex items-center gap-2 text-red-500">
                <FaHeart /> {photo?.likes}
              </p>
              <p className="flex items-center gap-2 text-blue-500">
                <FaDownload /> {photo?.downloads}
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Download
              </button>
              <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">
                Like
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
