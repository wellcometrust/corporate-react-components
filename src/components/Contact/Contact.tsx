import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';
import ImageElement from 'Image/ImageElement';
import RichText from 'RichText';
import VisuallyHidden from 'VisuallyHidden';

type ContactImageSourceProps = {
  image_full_hi?: string;
  image_full_mobile?: string;
  image_full_mobile_hi?: string;
};

type InstitutionProps = {
  name?: string;
  country?: string;
};

type ContactProps = {
  className?: string;
  email?: string;
  imageSources?: ContactImageSourceProps;
  institutions?: InstitutionProps[];
  isNested?: boolean;
  contactRole?: string;
  name?: string;
  teamTitle?: string;
  teamUrl?: string;
  tel?: string;
};

export const Contact = ({
  className,
  email,
  imageSources,
  institutions,
  isNested,
  contactRole,
  name,
  teamTitle,
  teamUrl,
  tel
}: ContactProps) => {
  const classNames = cx('cc-contact', {
    'cc-contact--nested': isNested,
    [className]: className
  });

  const accessiblePhoneText = name ? `Phone ${name} on` : 'Phone us on';

  return (
    <div className={classNames} itemScope itemType="http://schema.org/Person">
      {/* TODO - finalise responsive images */}
      {imageSources?.image_full_mobile && (
        <figure className="cc-contact__image">
          <ImageElement
            // sizes={sizes}
            src={imageSources?.image_full_mobile}
            // srcSet={srcSet}
          />
        </figure>
      )}
      {name && (
        <h3 className="cc-contact__name" itemProp="name">
          {name}
        </h3>
      )}
      {contactRole && (
        <RichText className="cc-contact__role" variant="text-snippet">
          {contactRole}
        </RichText>
      )}
      {institutions?.map(({ country, name: institutionName }) => (
        <p
          className="cc-contact__institution"
          itemProp="worksFor"
          key={institutionName}
        >
          {country ? `${institutionName}, ${country}` : institutionName}
        </p>
      ))}
      {teamUrl && (
        <p className="cc-contact__item">
          <Icon name="shareLink" className="cc-contact__link-icon" />
          <a href={teamUrl} className="cc-contact__link">
            {teamTitle || teamUrl}
          </a>
        </p>
      )}
      {email && (
        <p className="cc-contact__item">
          <Icon name="email" className="cc-contact__link-icon" />
          <a href={`mailto:${email}`} className="cc-contact__link">
            {email}
          </a>
        </p>
      )}
      {tel && (
        <p className="cc-contact__item">
          <Icon name="phone" className="cc-contact__link-icon" />
          <a href={`tel://${tel}`} className="cc-contact__link">
            <VisuallyHidden>{accessiblePhoneText}</VisuallyHidden>
            {tel}
          </a>
        </p>
      )}
    </div>
  );
};

export default Contact;
