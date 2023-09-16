"use client";
import { useEffect, useState } from "react";
import { Discord, Instagram, LinkedIn } from "./icons";
import { Github } from "./icons";
import Twitter from "./icons/Twitter";

export default function LeftNav() {
  return (
    <div
      className={`w-12 md:w-16 flex flex-col-reverse nav-left absolute md:fixed box-border left-0 top-0 z-10`}
    >
      <div className="w-full flex flex-col items-center justify-center gap-y-10 py-24 md:py-12">
        <Discord />
        <Github />
        <Instagram />
        <LinkedIn />
        <Twitter />
      </div>
    </div>
  );
}
