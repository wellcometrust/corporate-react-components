import React from 'react';
import cx from 'classnames';

import Author, { AuthorProps } from 'Author/Author';
import RichText from 'RichText';

type QuoteProps = {
  author?: AuthorProps;
  className?: string;
  cite?: string;
  text: string;
};

export const Quote = ({ author, className, cite, text }: QuoteProps) => {
  const classNames = cx('cc-quote', {
    [className]: className
  });

  return (
    <blockquote className={classNames}>
      <div
        className={cx('cc-quote__body', {
          'cc-quote__body--short-quote': text.trim().length <= 200
        })}
      >
        <RichText>{text}</RichText>
      </div>
      {author && (
        <Author
          className="cc-quote__author"
          imageSrc={author.imageSrc}
          imageSrcSet={author.imageSrcSet}
          layoutVariant="horizontal"
          jobTitle={author.jobTitle}
          links={author.links}
          name={author.name}
          organisation={author.organisation}
          titleAs="p"
        />
      )}
      {cite && !author && <cite className="cc-quote__cite">{cite}</cite>}
    </blockquote>
  );
};

export default Quote;
