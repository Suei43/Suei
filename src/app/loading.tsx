import Image from "next/image";
import LoadingImg from "@/assets/suei.jpg";

export default function Loading() {
  return (
    <main className="w-screen h-screen bg-black flex items-center justify-center">
      <Image
        src={LoadingImg}
        alt="Loading Gif"
        quality={100}
        placeholder="blur"
        className="loading-img"
      />
    </main>
  );
}
