import * as React from 'react';

function GlobeIcon(props) {
  return (
    <svg
      width={17}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_118_228)"
        stroke="#00D188"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.875 1.551a7 7 0 100 14 7 7 0 000-14z" />
        <path d="M8.875 1.551c-1.53 0-2.77 3.134-2.77 7s1.24 7 2.77 7 2.77-3.134 2.77-7-1.24-7-2.77-7zM15.095 11.761H2.655M15.875 8.551h-14M15.095 5.341H2.655" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_118_228">
          <path
            fill="#fff"
            transform="rotate(-180 8.438 8.276)"
            d="M0 0h16v16H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default GlobeIcon;
