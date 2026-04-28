import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotoPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const res = await fetch("https://ai-photo-teal.vercel.app/data.json");
  const photos = await res.json();
  const filteredPhoto = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() === category.toLowerCase()
      )
    : photos;
  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-4xl my-8">All Photos</h2>
      <Category />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhoto.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotoPage;
