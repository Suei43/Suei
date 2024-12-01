"use client";
import { useState, forwardRef, useContext, useLayoutEffect, useEffect, useRef } from "react";
import { Exp, Preview } from "../icons";
import { experience } from "@/data";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";
import DownArrow from "../icons/DownArrow";
import gsap from "gsap";
import Touch from "../icons/Touch";

const Experience = forwardRef((_props: any, ref: any) => {
  const [downArrowActive, setDownArrowActive] = useState(false);
  const [active, setActive] = useState(1);
  const [viewChanged, setViewChanged] = useState(0);
  const { setlocation } = useContext(LocationContext);

  const cardRef = useRef(null);

  const handleInView = (inView: boolean, _entry: any) => {
    if (inView) {
      setlocation("exp");
    }
    setViewChanged(viewChanged + 1);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".down_arrow_wrapper", {
        y: 25,
        duration: 1,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        ".experience_touch_icon",
        {
          scale: 1,
        },
        {
          scale: 1.25,
          duration: 0.75,
          ease: "power1.out",
          repeat: -1,
          yoyo: true,
        }
      );
    });

    return () => ctx.kill();
  }, []);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const tl = gsap.timeline();

    tl.to(card, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power1.out",
    });

    tl.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power1.in",
    });

    return () => {
      tl.kill();
    };
  }, [active, viewChanged]);

  return (
    <InView as='div' onChange={(inView, entry) => handleInView(inView, entry)}>
      <section
        className={`w-11/12 mx-auto md:w-full min-h-screen py-10 flex flex-col gap-10 lg:gap-16 items-center justify-center`}
        ref={ref}
      >
        <h1 className='text-3xl md:text-4xl font-bold text-center text-white flex flex-row gap-x-3 items-center'>
          <span>My Experience</span>
          <Exp size={"32"} stroke={"#8892b0"} />
        </h1>

        <main className='w-full md:w-10/12 flex flex-col md:flex-row justify-center items-center h-2/6 gap-10 md:gap-12 text-primary'>
          <div className='flex flex-row md:flex-col items-center justify-center'>
            {/* Navigation */}
            {experience.map((item, idx: number) => {
              return (
                <div
                  key={idx}
                  className='flex flex-row gap-[2px] md:flex-col gap-0 items-center justify-center'
                >
                  <button
                    key={item.id}
                    onClick={() => {
                      setActive(item.id);
                    }}
                    className={`w-4 h-4 border-[2px] border-primary mt-0 kite ${
                      active === item.id && "bg-primary"
                    }`}
                  ></button>
                  {item.id !== experience.length && (
                    <div className='w-8 h-0.5 md:w-0.5 md:h-8 bg-primary mr-[2px] md:mr-0'></div>
                  )}
                </div>
              );
            })}
            <Touch className='experience_touch_icon' size='24' />
          </div>

          <div className='w-11/12 md:w-6/12'>
            {experience.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`border border-primary p-4 relative flex flex-col gap-y-3 ${
                    active === item.id ? "block" : "hidden"
                  }`}
                  ref={active === item.id ? cardRef : null}
                >
                  <h1 className='text-secondary text-xl font-semibold'>{item.title}</h1>
                  <div className='flex flex-row items-center gap-1 text-sm'>
                    <span>{item.company}</span>
                    {item.url && <Preview link={item.url} />}
                  </div>
                  <ul className='flex flex-col gap-y-3 p-2'>
                    {item.description.map((i, idx: number) => {
                      return (
                        <li key={idx} className='text-sm'>
                          {i}
                        </li>
                      );
                    })}
                  </ul>
                  <p className='w-full text-right text-xs text-secondary'>{item.range.toUpperCase()}</p>
                </div>
              );
            })}
          </div>
          <div className='h-full relative hidden md:block'>
            <div
              className='down_arrow_wrapper'
              onMouseEnter={() => setDownArrowActive(true)}
              onMouseLeave={() => setDownArrowActive(false)}
              onClick={() => {
                setActive((prev) => (prev === experience.length ? 1 : prev + 1));
              }}
            >
              <DownArrow size='50' stroke={downArrowActive ? "#0579c3" : "#8892b0"} />
            </div>
          </div>
        </main>
      </section>
    </InView>
  );
});

Experience.displayName = "Experience";

export default Experience;
