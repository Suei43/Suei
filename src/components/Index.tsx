"use client";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Components
import LeftNav from "@/components/nav/LeftNav";
import RightNav from "@/components/nav/RightNav";
import Main from "@/components/sections/Main";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
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
    setlocation("home");
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
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className='fixed h-screen w-full box-border'>
            <LeftNav />
            <RightNav
              aboutScrollRef={aboutScrollRef}
              expScrollRef={expScrollRef}
              projScrollRef={projScrollRef}
              contactScrollRef={contactScrollRef}
            />
          </div>
          <div className='w-screen flex flex-col box-border' ref={doc}>
              <Main />
              <About ref={aboutScrollRef} />
              <Experience ref={expScrollRef} />
              <Projects ref={projScrollRef} />
              <Contact ref={contactScrollRef} />
          </div>
        </Fragment>
      )}
    </LocationContext.Provider>
  );
};

export default Index;
