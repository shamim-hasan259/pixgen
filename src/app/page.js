import Banner from "@/components/Banner";
import Loading from "@/components/Loading";
import TopGenerationPhoto from "@/components/TopGenerationPhoto";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <TopGenerationPhoto />
      </Suspense>
    </>
  );
}
