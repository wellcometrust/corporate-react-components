import React from 'react';
import IframeResizer from 'iframe-resizer-react';

export type IframeProps = {
  height: number;
  shouldResize?: boolean;
  src: string;
  title: string;
  width: number;
};

export const Iframe = ({
  height,
  shouldResize,
  src,
  title,
  width
}: IframeProps) =>
  shouldResize ? (
    <IframeResizer
      src={src}
      style={{ width: '1px', minWidth: '100%' }}
      title={title}
    />
  ) : (
    // Make this responsive by ignoring width/height, but using a container div with paddingTop
    // to ensure aspect ratio is respected.
    <div
      className="cc-iframe"
      style={{ paddingTop: `${((100 * height) / width).toFixed(2)}%` }}
    >
      <iframe className="cc-iframe__iframe" src={src} title={title} />
    </div>
  );

export default Iframe;
