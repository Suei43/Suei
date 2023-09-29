import React, { useState } from "react";
import Link from "next/link";

const Twitter = (props: { size?: string }) => {
  const [active, setActive] = useState(false);
  return (
    <Link target="_blank" href="https://twitter.com/sueii__">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || "20"}
        height={props.size || "20"}
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#0579C3" : "#8892b0"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="social-icon"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    </Link>
  );
};

export default Twitter;
