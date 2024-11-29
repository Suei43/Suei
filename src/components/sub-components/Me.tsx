import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/img/darksuei.jpeg";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const Me = () => {
  useLayoutEffect(() => {
    gsap.to(".avatar-img", {
      delay: 1,
      x: -12.5,
      y: -12.5,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <Link href={"/"} className='absolute top-10 right-10 md:block hidden gradient-border'>
      <Image src={avatar} alt='' width={125} quality={100} className='avatar-img' />
    </Link>
  );
};

export default Me;
