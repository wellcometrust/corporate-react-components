import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgLinkedin = (props: IconSVGProps) => (
  <svg viewBox="0 0 28 28" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="currentColor"
        d="M.5 14c0 7.444 6.056 13.5 13.5 13.5 7.443 0 13.5-6.056 13.5-13.5S21.444.5 14 .5.5 6.557.5 14z"
      />
      <g fill="currentColor">
        <path d="M20.273 19.38h-2.714v-3.906c0-1.02-.423-1.717-1.356-1.717-.714 0-1.11.47-1.295.925-.07.161-.059.39-.059.614v4.084h-2.687s.036-6.915 0-7.543h2.687v1.183c.16-.517 1.017-1.256 2.388-1.256 1.7 0 3.036 1.085 3.036 3.421v4.195zM9.444 10.893h-.017C8.56 10.893 8 10.316 8 9.585c0-.744.578-1.309 1.461-1.309.882 0 1.425.564 1.443 1.307 0 .731-.56 1.31-1.46 1.31zM8.309 11.837h2.393v7.543H8.309z" />
      </g>
    </g>
  </svg>
);

export default SvgLinkedin;
