import Link from "next/link";
import { useLayoutEffect, forwardRef } from "react";
import { gsap } from "gsap";
import { AboutIcon } from "./icons";

const About = forwardRef((props: any, ref: any) => {
  const tech = [
    "JavaScript",
    "TypeScript",
    "Apollo-GraphQL",
    "React & Redux",
    "Vue 3",
    "Next JS",
    "NodeJS & Express",
    "Fastify",
    "Nest JS",
    "Redis",
    "SQL & No-SQL Databases",
    "TypeORM & Mongoose",
    "Tailwind CSS",
    "Material UI",
    "GSAP",
    "Unit & E2E Testing",
    "AWS & GCP",
    "Web Sockets",
  ];

  return (
    <section
      className=" w-screen md:w-full h-fit md:h-screen flex items-center justify-center my-20 panel"
      ref={ref}
    >
      <div className="w-11/12 md:w-8/12 text-primary flex flex-col justify-center p-6 gap-y-4">
        <h1 className="text-3xl font-bold text-white flex flex-row justify-center items-center gap-x-4">
          <span>About Me</span>
          <AboutIcon stroke={"#8892b0"} size={"28"} />
        </h1>
        <p className="text-center text-base el">
          Hello! My name is Folarin Raphael, also known as{" "}
          <span className="text-secondary">Suei</span>. I am a{" "}
          <span className="text-white font-medium">
            FullStack Software developer
          </span>
          ,{" "}
          <span className="text-white font-medium">
            Quality Assurance Tester
          </span>{" "}
          and an{" "}
          <span className="text-white font-medium">Open Source Enthusiast</span>
          .
        </p>
        <p className="text-center text-base el">
          I may or may not have written my first line of code in 2019. Since
          then, i have explored some of the most pronounced tech niches before
          realizing my passion for building web applications. I have had the
          privilege of working with some amazing teams and companies including{" "}
          <Link href={""}>a startup</Link>,{" "}
          <Link href={""}>an agri-tech company</Link> and{" "}
          <Link href={""}>a non-profit organization. </Link>
        </p>
        <p className="text-center text-base el">
          I am a self-taught developer with a strong passion for learning and
          bringing ideas to life. When I am not writing code, I am either binge
          watching a new anime or endlessly scrolling through stack overflow.
        </p>
        <h3 className="text-secondary text-center italic el">
          Here&apos;s a list of some of the technologies I use:
        </h3>
        <div className="md:w-9/12 md:mx-auto flex flex-row flex-wrap gap-x-3 gap-y-3 justify-center">
          {tech.map((item, index) => {
            return (
              <p
                className="border text-white cursor-pointer border-primary py-1 px-3 text-xs"
                key={index}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
