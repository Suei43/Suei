import React, { useState } from "react";
import Link from "next/link";

const Discord = (props: { size?: string }) => {
  const [active, setActive] = useState(false);
  return (
    <Link target="_blank" href="https://discordapp.com/users/sueii">
      <svg
        width={props.size || "28"}
        height={props.size || "28"}
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="social-icon"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            className="social-icon"
            stroke={active ? "#0579C3" : "#8892b0"}
            stroke-linecap="round"
            stroke-linejoin="round"
            strokeWidth="9.6"
            d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"
          ></path>
          <ellipse
            className="social-icon"
            cx="71"
            cy="101"
            fill={active ? "#0579C3" : "#8892b0"}
            rx="13"
            ry="15"
          ></ellipse>
          <ellipse
            className="social-icon"
            cx="121"
            cy="101"
            fill={active ? "#0579C3" : "#8892b0"}
            rx="13"
            ry="15"
          ></ellipse>
        </g>
      </svg>
    </Link>
  );
};

export default Discord;
