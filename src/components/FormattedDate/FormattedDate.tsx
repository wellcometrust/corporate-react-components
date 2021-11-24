import React from 'react';
import { format, isValid } from 'date-fns';

type FormattedDateProps = {
  dateString: string;
};

export const FormattedDate = ({ dateString }: FormattedDateProps) => {
  if (!dateString) return null;

  const dateObject = new Date(dateString);

  return <>{isValid(dateObject) ? format(dateObject, 'd MMMM yyyy') : null}</>;
};

export default FormattedDate;
