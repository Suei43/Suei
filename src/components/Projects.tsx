"use client";
import Image from "next/image";
import { useState, forwardRef, useContext } from "react";
import ProjectCards from "./ProjectCards";
import { Github, Preview } from "./icons";
import { projects } from "@/data";
import Demo from "./icons/Demo";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";

const Projects = forwardRef((props: any, ref: any) => {
  const [viewMore, setViewMore] = useState(false);
  const { setlocation } = useContext(LocationContext);
  const handleInView = (inView: boolean, entry: any) => {
    if (inView) {
      setlocation("proj");
    }
  };

  const handleViewMore = (e: any) => {
    e.preventDefault();
    setViewMore(!viewMore);
  };

  return (
    <InView as="div" onChange={(inView, entry) => handleInView(inView, entry)}>
      <section
        className={`w-full h-fit flex flex-col items-center justify-center gap-y-10 mt-32 md:mt-0`}
        ref={ref}
      >
        <h1 className="w-10/12 text-xl font-bold text-white flex flex-row items-center justify-center gap-x-0 md:gap-x-2">
          <span className="w-fit text-center">
            Here are some major projects I&apos;ve worked on
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="social-icon"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                stroke="#8892b0"
                strokeWidth="1.32"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </h1>
        <div className="w-11/12 p-2 md:p-0 flex flex-row flex-wrap items-center gap-y-10 md:gap-x-5 md:justify-evenly">
          {projects.map((item) => {
            return (
              <div
                className={`p-4 rounded-lg md:w-3/12 h-fit border border-primary flex flex-col gap-y-4 relative items-center proj-card`}
                key={item.id}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    className=""
                  />
                )}
                <div
                  className={`${
                    item.image && " w-full "
                  } p-0 md:p-1 flex flex-col gap-y-3`}
                >
                  <h2 className="text-secondary font-black text-xl flex flex-row justify-between items-center">
                    {item.name}
                    <div className="flex flex-row items-center justify-center gap-x-3">
                      <Github link={item.git} />
                      {item.demo && <Demo link={item.demo} />}
                      <Preview link={item.link} />
                    </div>
                  </h2>
                  <p className="text-sm text-primary">{item.description}</p>
                  <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 justify-start">
                    {item.tech.map((i, idx: number) => {
                      return (
                        <p
                          key={idx}
                          className="border text-white cursor-pointer border-primary py-1 px-3 text-xs"
                        >
                          {i}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {viewMore && (
          <div className="flex flex-col md:flex-row items-center w-10/12 justify-center gap-y-8">
            <h3 className="text-white text-base w-11/12 md:w-4/12 md:text-center">
              And here&apos;s a list of other projects I&apos;ve worked on,
              including my open source contributions.
            </h3>
            <ProjectCards />
          </div>
        )}
        <div className="relative w-fit h-fit mt-5 rounded-lg el ">
          <button
            className="py-2.5 rounded-sm px-14 border border-primary text-white main-btn"
            onClick={(e) => handleViewMore(e)}
          >
            View <span>{viewMore ? "Less" : "More"}</span>
          </button>
        </div>
      </section>
    </InView>
  );
});

Projects.displayName = "Projects";

export default Projects;
