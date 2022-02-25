import React from 'react';

import { IconSVGProps } from '../Icon';

const Play = (props: IconSVGProps) => (
  <svg
    viewBox="0 0 24 24"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M14.143 0c7.81 0 14.143 6.332 14.143 14.143 0 7.81-6.332 14.143-14.143 14.143C6.332 28.286 0 21.954 0 14.143 0 6.332 6.332 0 14.143 0Z"
        id="a"
      />
    </defs>
    <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <g mask="url(#b)">
        <path
          d="M14.143-4.714C24.557-4.714 33 3.728 33 14.143 33 24.557 24.557 33 14.143 33 3.728 33-4.714 24.557-4.714 14.143c0-10.415 8.442-18.857 18.857-18.857Zm0 3.143c-8.679 0-15.714 7.035-15.714 15.714s7.035 15.714 15.714 15.714 15.714-7.035 15.714-15.714S22.822-1.571 14.143-1.571ZM8.857 6.904a1 1 0 0 1 .447.105l12.479 6.24a1 1 0 0 1 0 1.788l-12.479 6.24a1 1 0 0 1-1.447-.895V7.904a1 1 0 0 1 1-1Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default Play;
