const RightArrow = (props: { size?: string }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || "20"}
      height={props.size || "20"}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        {" "}
        <path
          d='M23.0681 11.9928L18.8183 7.75732L17.4065 9.17392L19.2419 11.0031L0.932836 11.0011L0.932617 13.0011L19.2373 13.0031L17.4158 14.8308L18.8324 16.2426L23.0681 11.9928Z'
          fill='#0579C3'
        ></path>{" "}
      </g>
    </svg>
  );
};

export default RightArrow;
