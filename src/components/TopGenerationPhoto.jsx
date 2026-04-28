import PhotoCard from "./PhotoCard";
const TopGenerationPhoto = async () => {
  const res = await fetch("https://ai-photo-teal.vercel.app/data.json");
  const photos = await res.json();
  const topPhoto = photos.slice(0, 8);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {topPhoto.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};
export default TopGenerationPhoto;
