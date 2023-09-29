"use client";
import Link from "next/link";
import { forwardRef, useContext } from "react";
import { Paperplane } from "./icons";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";

const Contact = forwardRef((props: any, ref: any) => {
  const { setlocation } = useContext(LocationContext);
  const handleInView = (inView: boolean, entry: any) => {
    if (inView) {
      setlocation("contact");
    }
  };
  return (
    <InView
      as="div"
      threshold={0.4}
      onChange={(inView, entry) => handleInView(inView, entry)}
    >
      <section
        className={`relative flex h-full py-28 md:h-screen w-full flex items-center justify-center text-primary`}
        ref={ref}
      >
        <div className="flex flex-col gap-y-6 items-center justify-center p-6">
          <Paperplane />
          <h1 className="w-fit text-5xl font-black text-white text-center">
            Get in Touch
          </h1>
          <p className="w-10/12 md:w-9/12 text-center">
            Have an idea for a project? Need my expertise? or you just want to
            chat? Feel free to shoot me an email!
          </p>
          <Link
            target="_blank"
            className="w-fit h-fit relative mt-2"
            href="mailto:folarinraphael@outlook.com"
          >
            <div className="py-2.5 rounded-sm px-14 border-2 border-secondary text-secondary main-btn text-base">
              Say Hi
            </div>
          </Link>
          <span className="absolute bottom-5 md:bottom-3 text-sm">
            {" "}
            &copy; Folarin Raphael 2023 ☕
          </span>
        </div>
      </section>
    </InView>
  );
});

Contact.displayName = "Contact";

export default Contact;
