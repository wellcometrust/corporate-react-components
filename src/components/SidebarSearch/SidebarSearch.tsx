import React from 'react';
import cx from 'classnames';

import Button from 'Button';
import Label from 'Label';

type SidebarSearchProps = {
  className?: string;
  id: string;
  label?: string;
  onChange: () => void;
  onClick: () => void;
  onKeyDown: () => void;
  onKeyUp: () => void;
  placeholder?: string;
  value: string;
};

export const SidebarSearch = ({
  className,
  id,
  label = 'Search by keyword',
  onChange,
  onClick,
  onKeyDown,
  onKeyUp,
  placeholder,
  value
}: SidebarSearchProps) => {
  const classNames = cx('cc-sidebar-search', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <Label
        className="cc-sidebar-search__label"
        htmlFor={`search-${id}`}
        text={label}
      />
      <div className="cc-sidebar-search__control">
        <input
          className="cc-sidebar-search__input"
          name={`search-${id}`}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          value={value}
          id={`search-${id}`}
        />
        <Button
          className="cc-sidebar-search__btn"
          icon="search"
          iconClassName="u-mr-0 u-ml-0"
          iconPlacementSwitch
          onClick={onClick}
          textClassName="u-visually-hidden"
          variant="unstyled"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SidebarSearch;
