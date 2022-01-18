/**
 * @file The Timeline component renders a piece of UI which is used
 * to visually display a list of events in (usally) chronological
 * order, e.g. applications process, historical events etc.
 *
 * Our Timeline component also calculates a "current status" which
 * renders a specific piece of UI within the Timeline component
 * displaying to users which of the `milestones` are currently active:
 * "Where we currently are in the timeline of events".
 */

import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { isPast } from 'date-fns';

import RichText from 'RichText';

type TimelineMilestoneProps = {
  body?: string;
  date: string; // UTC date strings
  dateLabel: string;
  linkHref?: string;
  linkText?: string;
  statusLabel?: string;
  title: string;
};

type TimelineProps = {
  className?: string;
  description?: string;
  initialStatusLabel?: string;
  milestones: TimelineMilestoneProps[];
  title?: string;
};

/**
 * Timeline component
 *
 * @constructor
 *
 * @param {string} className
 * @param {string} description
 * @param {string} initialStatusLabel
 * @param {object[]} milestones[]
 * @param {string} milestones[].body
 * @param {string} milestones[].date UTC formatted date string
 * @param {string} milestones[].dateLabel Human-readable date
 * @param {string} milestones[].linkHref
 * @param {string} milestones[].linkText
 * @param {string} milestones[].statusLabel String describing status of the Timeline when this milestone is the most recent
 * @param {string} milestones[].title
 * @param {string} title
 *
 */
export const Timeline = ({
  className,
  description,
  initialStatusLabel,
  milestones,
  title
}: TimelineProps) => {
  /**
   * In order to maintain a correct headers order we should update an timeline's item
   * heading if a timeline title not present.
   */
  const ItemTitleElement = title ? 'h4' : 'h3';
  const classNames = cx('cc-timeline', {
    [className]: className
  });
  const [statusLabel, setStatusLabel] = useState(initialStatusLabel);

  /**
   * In order to display the most up-to-date information in the browser
   * we must filter our array of `milestones` to find the:
   *
   * - most recent milestone (milestone.date)
   * - which has a statusLabel (milestone.statusLabel)
   *
   * @returns {string}
   */
  const getCurrentStatusLabel = () => {
    const currentMilestone = milestones

      // check the date value is a valid Date
      .filter(
        milestone =>
          milestone.statusLabel &&
          typeof new Date(milestone.date).getTime === 'function'
      )

      // convert date string to Date object (for Array.sort)
      .map(milestone => ({
        ...milestone,
        date: new Date(milestone.date)
      }))

      // Filter for dates in the past
      .filter(milestone => isPast(milestone.date))

      // sort descending by date (most recent first), use getTime b/c Typescript
      .sort((a, b) => b.date.getTime() - a.date.getTime())

      // Find first match which is in the past
      .find(milestone => isPast(milestone.date));

    return currentMilestone?.statusLabel ?? null;
  };

  /**
   * We must run getCurrentStatusLabel() on the client (rather than
   * passing the relevant data at build time) because the value is
   * date/time-sensitive.
   *
   * This method should avoid discrepencies in the value when the
   * component is statically rendered.
   */
  useEffect(() => {
    setStatusLabel(() => {
      const newStatusLabel = getCurrentStatusLabel();
      return newStatusLabel || initialStatusLabel;
    });
  }, []);

  return (
    <div className={classNames}>
      {title && <h3 className="cc-timeline__title">{title}</h3>}
      {description && (
        <RichText className="cc-timeline__description">{description}</RichText>
      )}
      <div className="cc-timeline__main">
        {statusLabel && <p className="cc-timeline__status">{statusLabel}</p>}
        <ol className="cc-timeline__list">
          {milestones.map((item, index) => (
            <li
              // index used to ensure no two <dt><dd> combos have identical keys
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}-${item.date}-${item.title}`}
              className="cc-timeline__item"
            >
              <div className="cc-timeline__item-date">{item.dateLabel}</div>
              {item.linkHref && item.linkText && (
                <a className="cc-timeline__item-link" href={item.linkHref}>
                  {item.linkText}
                </a>
              )}
              <div className="cc-timeline__item-details">
                <ItemTitleElement className="cc-timeline__item-title">
                  {item.title}
                </ItemTitleElement>
                {item.body && (
                  <RichText className="cc-timeline__item-body">
                    {item.body}
                  </RichText>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
