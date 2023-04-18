import * as React from 'react';

function YoutubeIcon(props) {
  return (
    <svg
      width={27}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.444 7.008a3.383 3.383 0 00-2.38-2.38C21.951 4.05 13.5 4.05 13.5 4.05s-8.451 0-10.564.556a3.452 3.452 0 00-2.38 2.402C0 9.121 0 13.502 0 13.502s0 4.404.556 6.494a3.383 3.383 0 002.38 2.38c2.135.578 10.564.578 10.564.578s8.451 0 10.564-.556a3.383 3.383 0 002.38-2.38C27 17.907 27 13.525 27 13.525s.022-4.403-.556-6.516z"
        fill="#7A8083"
      />
      <path d="M10.81 17.55l7.027-4.048-7.028-4.048v8.096z" fill="#fff" />
    </svg>
  );
}

export default YoutubeIcon;
