import React, { MouseEventHandler, useRef } from 'react';
import cx from 'classnames';

import Button from 'Button';

export type AccordionItemProps = {
  active?: boolean;
  children?: React.ReactNode;
  index?: number;
  isEmpty?: boolean;
  onClick?: MouseEventHandler;
  title: string;
  titleActive?: string;
  titleAs?: string;
  variant?: 'chevron' | 'plus';
};

export const AccordionItem = ({
  active = false,
  children,
  index,
  isEmpty,
  onClick,
  title,
  titleActive,
  titleAs,
  variant = 'plus'
}: AccordionItemProps) => {
  const content = useRef(null);
  const classNames = cx('cc-accordion-item', {
    'cc-accordion-item--active': active
  });
  const buttonClassNames = cx('cc-accordion__button', {
    [`cc-accordion__button--${variant}`]: variant
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TitleElement: any = titleAs || 'h3';

  return (
    <>
      {isEmpty ? (
        <div className={classNames}>
          <TitleElement className="cc-accordion-item__title">
            <span className={buttonClassNames}>{title}</span>
          </TitleElement>
        </div>
      ) : (
        <div className={classNames}>
          <TitleElement className="cc-accordion-item__title">
            <Button
              aria-expanded={active}
              className={buttonClassNames}
              icon={variant === 'chevron' ? 'chevronRight' : 'closeSmall'}
              iconPlacementSwitch
              id={`accordion-button-${index}`}
              onClick={onClick}
              variant="unstyled"
            >
              {active && titleActive ? titleActive : title}
            </Button>
          </TitleElement>

          <div
            aria-labelledby={`accordion-button-${index}`}
            className="cc-accordion__content"
            hidden={!active}
            ref={content}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default AccordionItem;
