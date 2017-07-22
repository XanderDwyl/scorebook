import React from 'react';
import { FormattedMessage } from 'react-intl';

const acceptedValue = (numLimit, val, type) => {
  if (type === 'min') {
    return val < numLimit;
  }

  if (type === 'max') {
    return val > numLimit;
  }

  return <FormattedMessage id={`validate.accepted_value_${type}_${numLimit}`} defaultMessage={`${type} length value is ${numLimit}.`} />;
};

export const required = value => (
  value ? undefined :
  <FormattedMessage id="validate.field_required" defaultMessage="Field Required" />
);

export const minLength = limit => value =>
  (acceptedValue(limit, value.length, 'min')
    ? <FormattedMessage id={`validate.min_length_${limit}`} defaultMessage={`Password must be at least ${limit} characters.`} />
    : undefined);

export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? <FormattedMessage id="validate.email_address" defaultMessage="Invalid email address" />
    : undefined);
