const Code = (props: { size: string }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="social-icon-nav"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
          stroke="#8892b0"
          strokeWidth="1.32"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default Code;
