const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://ai-photo-teal.vercel.app/data.json");
  const photos = await res.json();

  const photo = await photos.find((p) => p.id == id);

  return (
    <div className="min-h-screen">
      <h1>{photo?.title}</h1>
      <p>{photo?.prompt}</p>
    </div>
  );
};

export default PhotoDetailsPage;
