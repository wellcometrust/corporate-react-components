import React from 'react';
import cx from 'classnames';

import Person, { PersonProps } from 'Person/Person';

type PersonPropsExtend = PersonProps & {
  id: string;
};

export type PeopleListProps = {
  people: PersonPropsExtend[];
  variant?: 'grid' | 'list';
};

export const PeopleList = ({ people, variant = 'list' }: PeopleListProps) => (
  <ul
    className={cx('cc-people-list', {
      [`cc-people-list--${variant}`]: variant
    })}
  >
    {people?.map((person, index) => (
      <li
        className={cx('cc-people-list__item', {
          [`cc-people-list__item--${variant}`]: variant
        })}
        key={`${person.id}-${index}`}
      >
        <Person
          imageSizes={person.imageSizes}
          imageSrc={person.imageSrcSet}
          imageSrcSet={person.imageSrcSet}
          jobTitle={person.jobTitle}
          layoutVariant="compact"
          links={person.links}
          name={person.name}
          organisation={person.organisation}
        />
      </li>
    ))}
  </ul>
);

export default PeopleList;
