"use client";
import LeftNav from "@/components/LeftNav";
import RightNav from "@/components/RightNav";
import Main from "@/components/Main";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Loading from "./loading";
import { useState, useEffect, useRef, useLayoutEffect, Fragment } from "react";
import { gsap } from "gsap";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const doc = useRef(null);
  const aboutScrollRef = useRef(null);
  const contactScrollRef = useRef(null);
  const expScrollRef = useRef(null);
  const projScrollRef = useRef(null);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timerId);
  }, []);

  useLayoutEffect(() => {
    if (!loading) {
      gsap.to(".curr", {
        backgroundColor: "#2c3539",
        duration: 3,
        ease: "power2.out",
      });
    }
  }, [loading]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <main className="w-screen flex flex-col box-border curr" ref={doc}>
          <div className="relative h-screen w-full box-border">
            <LeftNav />
            <RightNav
              aboutScrollRef={aboutScrollRef}
              expScrollRef={expScrollRef}
              projScrollRef={projScrollRef}
              contactScrollRef={contactScrollRef}
            />
            <Main />
          </div>
          <About ref={aboutScrollRef} />
          <Experience ref={expScrollRef} />
          <Projects ref={projScrollRef} />
          <Contact ref={contactScrollRef} />
        </main>
      )}
    </Fragment>
  );
}
