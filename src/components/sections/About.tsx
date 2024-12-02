import Link from "next/link";
import { forwardRef, useContext, useEffect, useState } from "react";
import { AboutIcon } from "../icons";
import { technologies } from "@/data";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import gsap from "gsap";

const About = forwardRef((_props: any, ref: any) => {
  const width = useWindowWidth();
  const [viewChanged, setViewChanged] = useState(0);

  const { setlocation } = useContext(LocationContext);

  const handleInView = (inView: boolean, _entry: any) => {
    if (inView) {
      setlocation("about");
    }
    setViewChanged(viewChanged + 1);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".animate_element",
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.75,
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.15,
        }
      );
    });

    return () => {
      ctx.kill();
    };
  }, [viewChanged]);

  return (
    <InView as='div' onChange={(inView, entry) => handleInView(inView, entry)}>
      <section className='w-full h-screen flex items-center justify-center panel' ref={ref}>
        <div className='w-full md:w-8/12 text-primary flex flex-col justify-center p-6 gap-y-4'>
          <h1 className='text-3xl font-bold text-white flex flex-row justify-center items-center gap-x-4'>
            <span>About Me</span>
            <AboutIcon stroke={"#8892b0"} size={"28"} />
          </h1>
          <p className='text-center text-sm md:text-base animate_element'>
            Hello there! My name is Folarin Raphael, my friends call me{" "}
            <span className='text-secondary'>Suei</span>. I am a{" "}
            <span className='text-secondary font-medium'>
              <Link href={"https://en.wikipedia.org/wiki/Cloud-native_computing"} className=''>
                Cloud Native
              </Link>{" "}
              Software Engineer
            </span>{" "}
            and a <span className='text-secondary font-medium'>FullStack Developer.</span>
          </p>
          <p className='text-center text-sm md:text-base animate_element'>
            I may or may not have written my first line of code in 2019. Since then, I have explored some of
            the most pronounced tech niches before realizing my passion for building scalable web
            applications. I have had the privilege of working with some amazing teams and personalities and
            building some cool stuff.
          </p>
          <p className='text-center text-sm md:text-base animate_element'>
            I am a self-taught developer with a strong passion for learning and bringing ideas to life. When I
            am not writing code, I am either binge watching a new netflix series or endlessly scrolling
            through{" "}
            <Link href={"https://daily.dev"} className='text-secondary'>
              daily.dev
            </Link>
            .
          </p>

          <h3 className='text-center text-sm italic animate_element'>
            Here&apos;s a list of some of the technologies I often use:
          </h3>

          <div className='md:w-11/12 md:mx-auto flex flex-row flex-wrap gap-x-3 gap-y-3 justify-center my-[2rem]'>
            <Marquee speed={50} pauseOnHover={true}>
              {technologies.map((item, index) => (
                <Image
                  src={item}
                  alt={"tech"}
                  width={width > 768 ? 45 : 35}
                  key={index}
                  className='mx-[12px]'
                />
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </InView>
  );
});

About.displayName = "About";

export default About;
