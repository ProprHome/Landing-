import * as React from 'react';

function Icon(props) {
  return (
    <svg
      width={15}
      height={9}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.484 1.733l5.46 5.46a.623.623 0 00.87 0l5.46-5.46"
        stroke="#7A8083"
        strokeWidth={1.5}
        strokeMiterlimit={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Icon;
