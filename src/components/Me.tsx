import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/sueiavatar.jpeg";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const Me = () => {
  useLayoutEffect(() => {
    gsap.to(".avatar-img", {
      delay: 2,
      x: -10,
      y: -10,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <Link href={"/"} className='absolute top-4 right-4 md:block hidden avatar'>
      <Image src={avatar} alt='' width={70} quality={100} className='avatar-img' />
    </Link>
  );
};

export default Me;
