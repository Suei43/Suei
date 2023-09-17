"use client";
import { useState } from "react";
import { moreprojects } from "@/data";

const ProjectCards = () => {
  const [viewMore, setViewMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const projects = moreprojects;

  const handleViewMore = (e: any) => {
    e.preventDefault();
    setViewMore(!viewMore);
  };

  return (
    <section className="w-full p-6 flex flex-row flex-wrap items-center justify-center gap-y-10 gap-x-10">
      {projects.map((project: any) => {
        return (
          <div
            className="w-60 h-60 h-fit border-2 rounded-lg border-primary p-4 box-border flex flex-col gap-y-4 proj-card"
            key={project.id}
          >
            <div className="flex flex-row items-center justify-end gap-x-3 w-full">
              <a href={project.git}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  id={project.id}
                  stroke={
                    activeIndex === String(project.id) + 1
                      ? "#0579C3"
                      : "#8892b0"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="social-icon"
                  onMouseEnter={() => setActiveIndex(String(project.id) + 0)}
                  onMouseLeave={() => setActiveIndex("")}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href={project.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={
                    activeIndex === String(project.id) + 1
                      ? "#0579C3"
                      : "#8892b0"
                  }
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="social-icon"
                  onMouseEnter={() => setActiveIndex(String(project.id) + 1)}
                  onMouseLeave={() => setActiveIndex("")}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <h1>{project.name}</h1>
            <p className="text-primary text-xs">{project.description}</p>
            <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 justify-start">
              {project.tech.map((i: string, idx: number) => {
                return (
                  <p
                    key={idx}
                    className="border text-primary cursor-pointer border-primary py-1 px-3 text-xs"
                  >
                    {i}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

ProjectCards.displayName = "ProjectCards";

export default ProjectCards;
