import { AboutIcon, ContactIcon, Exp, Code } from "./icons";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function RightNav() {
  useLayoutEffect(() => {
    const ctx: any = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".nav-right-top",
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".nav-right-bottom",
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".nav",
          {
            delay: 2,
            opacity: 0,
            x: 100,
          },
          { opacity: 1, x: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
        );
    }, ".nav-right");

    return () => ctx.reverse();
  }, []);

  return (
    <div className="nav-right w-14 md:flex flex-col items-end justify-center absolute hidden md:fixed right-0 top-0 z-10">
      <div className="nav-right-top"></div>
      <nav className="w-full flex flex-col items-center justify-center gap-y-14 py-12">
        <div className="nav">
          <AboutIcon />
        </div>
        <div className="nav">
          <Exp />
        </div>
        <div className="nav">
          <Code />
        </div>
        <div className="nav">
          <ContactIcon />
        </div>
      </nav>
      <div className="nav-right-bottom"></div>
    </div>
  );
}
