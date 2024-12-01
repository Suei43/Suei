import { Discord, LinkedIn, Github } from "../icons";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import Blog from "../icons/Blog";

const TopNav = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".nav",
      {
        opacity: 0,
        y: -75,
      },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.1 }
    );
    return () => {};
  }, []);

  return (
    <section className='absolute flex flex-row md:hidden gap-x-5 justify-center items-center py-2 px-6'>
      <div className='nav'>
        <Discord size='28' />
      </div>
      <div className='nav'>
        <Github size='20' />
      </div>
      <div className='nav'>
        <LinkedIn size='22' />
      </div>
      <div className='nav'>
        <Blog size='20' />
      </div>
    </section>
  );
};

export default TopNav;
