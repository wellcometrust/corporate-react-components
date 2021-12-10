import React from 'react';
import cx from 'classnames';

import RichText from 'RichText';

type TextProps = {
  children: string;
  className?: string;
  title?: string;
  variant?: 'text' | 'text-snippet';
};

export const Text = ({
  children,
  className,
  title,
  variant = 'text'
}: TextProps) => {
  const classNames = cx(`cc-${variant}`, {
    [className]: className
  });

  return (
    <div className={classNames}>
      {title && <h2 className={`cc-${variant}__title`}>{title}</h2>}
      <RichText variant={variant}>{children}</RichText>
    </div>
  );
};

export default Text;
