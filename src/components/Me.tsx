import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/sueiavatar.jpeg";

const Me = () => {
  return (
    <Link href={"/"} className="absolute top-2 right-0 md:block hidden avatar">
      <Image src={avatar} alt="" width={65} quality={100} />
    </Link>
  );
};

export default Me;
