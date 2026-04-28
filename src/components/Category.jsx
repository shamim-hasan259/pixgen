import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  const res = await fetch("https://ai-photo-teal.vercel.app/category.json");
  const categories = await res.json();
  return (
    <div className="space-x-3 my-5">
      {categories.map((category) => (
        <Link
          href={`?category=${category.name.toLowerCase()}`}
          key={category.id}
        >
          <Button variant="outline"> {category.name}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
