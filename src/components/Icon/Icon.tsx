import React from 'react';
import cx from 'classnames';

import iconMapping from './iconMapping';

export type IconSVGProps = {
  role?: string;
  title?: string;
};

type IconProps = {
  className?: string;
  height?: string;
  name: string;
  width?: string;
};

export const Icon = ({ className, height, name, width }: IconProps) => {
  const isIcon = iconMapping.has(name);
  const IconElement = iconMapping.get(name);
  const classNames = cx('icon', { [`${className}`]: className });

  return isIcon ? (
    <span className={classNames} style={{ height, width }} aria-hidden="true">
      <IconElement />
    </span>
  ) : null;
};

Icon.displayName = 'Icon';

export default Icon;
