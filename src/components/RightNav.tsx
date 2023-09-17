import { AboutIcon, ContactIcon, Exp, Code } from "./icons";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function RightNav(props: {
  aboutScrollRef: any;
  contactScrollRef: any;
  expScrollRef: any;
  projScrollRef: any;
}) {
  const width = window.innerWidth;
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

    return () => {};
  }, []);

  const handleScroll = (e: React.SyntheticEvent, str: string) => {
    e.preventDefault();
    let scroll;
    switch (str) {
      case "about":
        scroll = props.aboutScrollRef.current;
        break;
      case "exp":
        scroll = props.expScrollRef.current;
        break;
      case "proj":
        scroll = props.projScrollRef.current;
        break;
      case "contact":
        scroll = props.contactScrollRef.current;
        break;
    }
    if (scroll) {
      scroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav-right w-11 md:w-14 flex flex-col items-end justify-center fixed right-0 top-0 z-10">
      <div className="nav-right-top"></div>
      <nav className="w-full flex flex-col items-center justify-center gap-y-12 md:gap-y-14 py-12">
        <div className="nav" onClick={(e) => handleScroll(e, "about")}>
          <AboutIcon stroke={"#8892b0"} size={width > 900 ? "22" : "19"} />
        </div>
        <div className="nav" onClick={(e) => handleScroll(e, "exp")}>
          <Exp size={width > 900 ? "28" : "24"} />
        </div>
        <div className="nav" onClick={(e) => handleScroll(e, "proj")}>
          <Code size={width > 900 ? "30" : "25"} />
        </div>
        <div className="nav" onClick={(e) => handleScroll(e, "contact")}>
          <ContactIcon size={width > 900 ? "28" : "24"} />
        </div>
      </nav>
      <div className="nav-right-bottom"></div>
    </div>
  );
}
