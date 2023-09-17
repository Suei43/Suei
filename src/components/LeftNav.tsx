"use client";
import { useLayoutEffect, useRef } from "react";
import { Discord, Instagram, LinkedIn } from "./icons";
import { Github } from "./icons";
import { Twitter } from "./icons";
import { gsap } from "gsap";

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
      className={`w-12 md:w-16 flex flex-col-reverse nav-left absolute md:fixed box-border left-0 top-0 z-10`}
      ref={leftNav}
    >
      <div className="w-full flex flex-col items-center justify-center gap-y-10 py-24 md:py-12">
        <div className="nav">
          <Discord />
        </div>
        <div className="nav">
          <Github />
        </div>
        <div className="nav">
          <Instagram />
        </div>
        <div className="nav">
          <LinkedIn />
        </div>
        <div className="nav">
          <Twitter />
        </div>
      </div>
    </div>
  );
}
