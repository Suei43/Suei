"use client";
import React, { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);

  const handleResumeClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const URL =
      "https://docs.google.com/document/d/1igEWhqD8-Ko6Xu6PPKVDBmqPB2BPbxEY8siqQtirCUc/edit?usp=sharing";
    if (typeof window !== undefined) {
      window.open(URL, "_blank");
    }
  };

  useLayoutEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(true);
      const ctx: any = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          ".el",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            duration: 1,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.2,
          }
        );
      });
    }, 2400);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      className={`absolute bottom-0 left-0 md:left-16 p-8 md:p-20 h-4/6 flex-col gap-y-4 w-full md:w-10/12 text-primary box-border ${
        isVisible ? " flex " : "hidden"
      }`}
    >
      <h1 className="text-5xl md:text-7xl text-white font-black el">
        <span className="hover:text-secondary hover:cursor-pointer w-fit h-fit">
          Folarin Raphael.
        </span>
      </h1>
      <h2 className="text-secondary text-sm md:text-lg font-semibold el w-10/12">
        FULLSTACK ENGINEER & BLOCKCHAIN DEVELOPER
      </h2>
      <p className="w-10/12 md:w-8/12 text-xs md:text-base el">
        I excel at creating software solutions that prioritize user-eccentric
        digital experiences.{" "}
        <span className="md:block hidden">
          Additionally, I have a talent for diagnosing and improving systems.
        </span>
      </p>
      <div className="relative w-fit h-fit mt-5 rounded-lg el">
        <button
          onClick={(e) => handleResumeClick(e)}
          className="text-secondary border-2 border-secondary rounded-sm py-3 w-40 main-btn text-xs md:text-md"
        >
          Résumé
        </button>
      </div>
    </div>
  );
}
