"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Discord, LinkedIn, Github } from "../icons";
import Blog from "../icons/Blog";
import StemClover from "@/assets/svg/stem_clover.svg";

export default function LeftNav() {
  const leftNav = useRef(null);
  useLayoutEffect(() => {
    const ctx: any = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        leftNav.current,
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "linear",
        }
      ).fromTo(
        ".nav",
        {
          opacity: 0,
          x: -100,
        },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 }
      );
    }, ".nav-left");
    return () => ctx.kill();
  }, []);
  return (
    <div
      className={`w-12 md:w-16 flex-col items-center justify-between nav-left hidden md:flex box-border absolute left-0 top-0 z-10 pt-[16px]`}
      ref={leftNav}
    >
      <Image
        src={StemClover}
        alt='clover'
        width={40}
        className='cursor-pointer'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div className='w-full flex flex-col items-center justify-center gap-y-10 py-24 md:py-12'>
        <div className='nav'>
          <Discord />
        </div>
        <div className='nav'>
          <Github />
        </div>
        <div className='nav'>
          <LinkedIn />
        </div>
        <div className='nav'>
          <Blog />
        </div>
      </div>
    </div>
  );
}
