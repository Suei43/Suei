"use client";
import LeftNav from "@/components/LeftNav";
import RightNav from "@/components/RightNav";
import Main from "@/components/Main";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Loading from "./loading";
import { useState, useEffect, Fragment } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 1750);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <main className="w-screen flex flex-col box-border">
          <div className="relative h-screen w-full box-border">
            <LeftNav />
            <RightNav />
            <Main />
          </div>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      )}
    </Fragment>
  );
}
