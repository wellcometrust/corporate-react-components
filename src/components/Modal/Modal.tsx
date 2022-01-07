import React, { useState } from 'react';
import cx from 'classnames';

import Grid, { GridCell } from 'Grid';
import RichText from 'RichText';
import Section from 'Section';
import Button from 'Button';

type ModalProps = {
  body?: string;
  buttons: {
    href?: string;
    text?: string;
    type: 'agree' | 'cancel' | 'link';
    variant: 'link' | 'primary' | 'secondary' | 'tertiary' | 'unstyled';
  }[];
  className?: string;
  onAccept: () => void;
  title?: string;
};

const defaultButtonText = {
  agree: 'Agree',
  cancel: 'Cancel',
  link: 'Back'
};

export const Modal = ({
  body,
  buttons = [],
  className,
  onAccept,
  title
}: ModalProps) => {
  const [wasAccepted, setWasAccepted] = useState(false);

  const classNames = cx('c-info-box cc-modal', {
    [className]: className
  });

  const handleAgree = () => {
    if (typeof onAccept === 'function') onAccept();
    setWasAccepted(true);
  };

  return (
    !wasAccepted && (
      <Section className={classNames}>
        <Grid>
          <GridCell column={1} columnCount={1}>
            <h3>{title}</h3>
            <RichText>{body}</RichText>
            <div className="cookie-message__buttons">
              {buttons &&
                buttons.map(({ text, type, variant, href }) => (
                  <Button
                    className="cc-modal__button"
                    href={href || null}
                    key={`modal-button-${type}`}
                    onClick={type === 'agree' && handleAgree}
                    type="button"
                    variant={variant}
                  >
                    {text || defaultButtonText[type]}
                  </Button>
                ))}
            </div>
          </GridCell>
        </Grid>
      </Section>
    )
  );
};

export default Modal;
