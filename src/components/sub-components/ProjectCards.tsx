"use client";
import { useState } from "react";
import { moreprojects } from "@/data";
import { Github, Preview } from "./icons";

const ProjectCards = () => {
  const [viewMore, setViewMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const projects = moreprojects;

  const handleViewMore = (e: any) => {
    e.preventDefault();
    setViewMore(!viewMore);
  };

  return (
    <section className="w-full p-6 flex flex-row flex-wrap items-center justify-center gap-y-10 gap-x-10 bg-red-300">
      {projects.map((project: any) => {
        return (
          <div
            className="w-60 h-fit border-2 rounded-lg border-primary p-4 box-border flex flex-col gap-y-4 proj-card"
            key={project.id}
          >
            <div className="flex flex-row items-center justify-end gap-x-3 w-full">
              <Github link={project.git} />
              <Preview link={project.link} />
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
