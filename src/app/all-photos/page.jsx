import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotoPage = async () => {
  const res = await fetch("https://ai-photo-teal.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div className="container mx-auto">
      <h2 className="text-center my-8">All Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotoPage;
