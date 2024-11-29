"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Discord, LinkedIn, Github } from "../icons";
import Blog from "../icons/Blog";
import Suei from "@/assets/img/suei.jpg";

export default function LeftNav() {
  const leftNav = useRef(null);
  useLayoutEffect(() => {
    const ctx: any = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        leftNav.current,
        {
          opacity: 0,
          y: -100,
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
        { opacity: 1, x: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
      );
    }, ".nav-left");
    return () => ctx.kill();
  }, []);
  return (
    <div
      className={`w-12 md:w-16 flex-col justify-between nav-left hidden md:flex fixed box-border left-0 top-0 z-10`}
      ref={leftNav}
    >
      <Image src={Suei} alt='Loading Gif' quality={100} className='left-nav-logo' />
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
