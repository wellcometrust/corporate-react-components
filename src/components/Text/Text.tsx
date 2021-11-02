import React from 'react';
import cx from 'classnames';

import RichText from 'RichText';

type TextProps = {
  children: string;
  className?: string;
  title?: string;
  titleAs?: 'h3' | 'p';
  variant?: 'text' | 'text-snippet';
};

export const Text = ({
  children,
  className,
  title,
  titleAs = 'h3',
  variant = 'text'
}: TextProps) => {
  const TitleElement = variant === 'text-snippet' ? 'p' : titleAs;
  const classNames = cx(`cc-${variant}`, {
    [className]: className
  });

  return (
    <div className={classNames}>
      {title && (
        <TitleElement className={`cc-${variant}__title`}>{title}</TitleElement>
      )}
      <RichText variant={variant}>{children}</RichText>
    </div>
  );
};

export default Text;
