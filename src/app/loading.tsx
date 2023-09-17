"use client";

import Image from "next/image";
import LoadingImg from "@/assets/suei.jpg";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const comp = useRef(null);
  const img = useRef(null);
  const tl: any = useRef(null);

  useLayoutEffect(() => {
    let vh = window.innerHeight;
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(img.current, {
        y: vh / 2 + 20,
        duration: 1,
        ease: "bounce.out",
      });
      gsap.to(img.current, {
        rotateZ: 0,
        duration: 1,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="w-screen h-screen bg-black flex items-center justify-center loading"
      ref={comp}
    >
      <Image
        src={LoadingImg}
        alt="Loading Gif"
        quality={100}
        className="loading-img"
        ref={img}
      />
    </main>
  );
}
