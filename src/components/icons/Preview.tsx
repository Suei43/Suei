import { useState } from "react";
import Link from "next/link";

export default function Preview(props: { link: string }) {
  const [active, setActive] = useState(false);
  const [link, setLink] = useState(props.link);

  return (
    <Link target="_blank" href={link}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#0579C3" : "#8892b0"}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="social-icon"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </Link>
  );
}
