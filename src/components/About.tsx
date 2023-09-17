import Link from "next/link";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { AboutIcon } from "./icons";

export default function About() {
  const tech = [
    "Java",
    "TypeScript",
    "Apollo-GraphQL",
    "React & Redux",
    "Next JS",
    "Angular",
    "Fastify",
    "NodeJS & Express",
    "Nest JS",
    "SQL & No-SQL Databases",
    "Linux shell",
    "Unit & Integration Testing",
    "Azure",
    "Material UI",
    "Web Sockets",
    "Redis",
  ];

  useLayoutEffect(() => {
    const ctx: any = gsap.context(() => {
      const tl = gsap.timeline();
      tl.set(".el", {
        y: 20,
        opacity: 0,
        scrollTrigger: {
          trigger: ".panel",
          start: "top top",
        },
      });
      tl.fromTo(
        ".el",
        {
          y: 20,
          opacity: 0,
          scrollTrigger: {
            trigger: ".panel",
            start: "top top",
          },
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".panel",
            start: "top top",
          },
        }
      );
    });
    return () => {};
  }, []);

  return (
    <section className=" w-screen md:w-full h-fit md:h-screen flex items-center justify-center my-20 md:my-0 panel">
      <div className="w-11/12 md:w-8/12 text-primary flex flex-col justify-center p-6 gap-y-4">
        <h1 className="text-3xl font-bold text-white flex flex-row justify-center items-center gap-x-4">
          <span>About Me</span>
          <AboutIcon stroke={"#dae6e2"} />
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
          bringing ideas to life. When I am not writing code, I am either
          binging new Netflix series or endlessly scrolling through
          StackOverflow.
        </p>
        <h3 className="text-secondary text-center italic el">
          Here's a list of some of the technologies I use,
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
}
