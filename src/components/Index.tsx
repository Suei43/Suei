"use client";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Components
import LeftNav from "@/components/LeftNav";
import RightNav from "@/components/RightNav";
import Main from "@/components/Main";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Loading from "@/components/loading";
import { LocationContext } from "@/context/LocationContext";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [location, setlocation] = useState("home");
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
        duration: 4,
        ease: "power2.out",
      });
    }
  }, [loading]);
  return (
    <LocationContext.Provider value={{ location, setlocation }}>
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
    </LocationContext.Provider>
  );
};

export default Index;
