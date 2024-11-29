"use client";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FullPage, Slide } from "react-full-page";

/* Components */
import LeftNav from "@/components/nav/LeftNav";
import RightNav from "@/components/nav/RightNav";
import Main from "@/components/sections/Main";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Loading from "@/components/sub-components/Loading";
import { LocationContext } from "@/context/LocationContext";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const Home = () => {
  const width = useWindowWidth();
  const [loading, setLoading] = useState(true);
  const [location, setlocation] = useState("home");
  const doc = useRef(null);
  const homeScrollRef = useRef(null);
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
              homeScrollRef={homeScrollRef}
              aboutScrollRef={aboutScrollRef}
              expScrollRef={expScrollRef}
              projScrollRef={projScrollRef}
              contactScrollRef={contactScrollRef}
            />
          </div>
          {width > 768 && (
            <div className='w-screen flex flex-col box-border' ref={doc}>
              <FullPage>
                <Slide>
                  <Fragment>
                    <Main ref={homeScrollRef} />
                  </Fragment>
                </Slide>
                <Slide>
                  <Fragment>
                    <About ref={aboutScrollRef} />
                  </Fragment>
                </Slide>
                <Slide>
                  <Fragment>
                    <Experience ref={expScrollRef} />
                  </Fragment>
                </Slide>
                <Slide>
                  <Fragment>
                    <Projects ref={projScrollRef} />
                  </Fragment>
                </Slide>
                <Slide>
                  <Contact ref={contactScrollRef} />
                </Slide>
              </FullPage>
            </div>
          )}

          {width < 768 && (
            <div className='w-screen flex flex-col box-border' ref={doc}>
              <Fragment>
                <Main ref={homeScrollRef} />
              </Fragment>
              <Fragment>
                <About ref={aboutScrollRef} />
              </Fragment>
              <Fragment>
                <Experience ref={expScrollRef} />
              </Fragment>
              <Fragment>
                <Projects ref={projScrollRef} />
              </Fragment>
              <Contact ref={contactScrollRef} />
            </div>
          )}
        </Fragment>
      )}
    </LocationContext.Provider>
  );
};

export default Home;