import Link from "next/link";
import React, { useState } from "react";

const Demo = (props: { link: string }) => {
  const [active, setActive] = useState(false);
  return (
    <Link target='_blank' href={props.link}>
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        fill='none'
        className='social-icon'
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          {" "}
          <title></title>
          <g fill='none' fillRule='evenodd' id='页面-1' strokeWidth='1.8'>
            <g
              id='导航图标'
              stroke={active ? "#0579C3" : "#8892b0"}
              strokeWidth='1.8'
              transform='translate(-177.000000, -334.000000)'
            >
              <g id='官方网站' transform='translate(177.000000, 334.000000)'>
                <g id='编组' transform='translate(3.000000, 4.000000)'>
                  <rect
                    height='4.5'
                    id='矩形'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    width='5'
                    x='7'
                    y='12'
                  ></rect>
                  <rect height='12' id='矩形' rx='1' width='19' x='0' y='0'></rect>
                  <line
                    id='路径'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    x1='8.5'
                    x2='10.5'
                    y1='9.5'
                    y2='9.5'
                  ></line>
                  <line
                    id='路径'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    x1='4.5'
                    x2='14.5'
                    y1='16.5'
                    y2='16.5'
                  ></line>
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </Link>
  );
};

export default Demo;
