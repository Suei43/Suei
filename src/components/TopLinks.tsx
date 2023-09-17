import { Discord, Instagram, LinkedIn, Github, Twitter } from "./icons";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const TopLinks = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".nav",
      {
        opacity: 0,
        y: -75,
      },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
    return () => {};
  }, []);

  return (
    <section className="flex flex-row md:hidden gap-x-5 justify-center items-center p-2">
      <div className="nav">
        <Discord size={"24"} />
      </div>
      <div className="nav">
        <Github size={"18"} />
      </div>
      <div className="nav">
        <Instagram size={"18"} />
      </div>
      <div className="nav">
        <LinkedIn size={"18"} />
      </div>
      <div className="nav">
        <Twitter size={"18"} />
      </div>
    </section>
  );
};

export default TopLinks;
