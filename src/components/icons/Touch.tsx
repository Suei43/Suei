const Touch = (props: { size?: string; className?: string }) => {
  return (
    <svg
      width={props.size || "20"}
      height={props.size || "20"}
      viewBox='0 0 24 24'
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className || ""}
    >
      <defs></defs>
      <path
        fill='none'
        stroke='#8892b0'
        strokeMiterlimit={10}
        strokeWidth='1.91px'
        d='M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19'
      />
      <path
        fill='none'
        stroke='#8892b0'
        strokeMiterlimit={10}
        strokeWidth='1.91px'
        d='M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26'
      />
    </svg>
  );
};

export default Touch;
