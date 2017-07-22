import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({
  currentPassword,
  notMatch,
  icon,
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="mb-1 field-group">
    <span>{label} </span>
    {touched &&
      ((error &&
        <div className="box-qoute-border bottom">
          <div className="box-body card-danger">{error}</div>
        </div>) ||
        (warning &&
          <div className="box-qoute-border bottom">
            <div className="box-body">{error}</div>
          </div>))}
    <div
      className={`input-group ${((error !== undefined || notMatch) && touched) || currentPassword ? 'outline-error' : ''}`}
    >
      <span className="input-group-addon bg-icon"><i className={icon} /></span>
      <input
        type={type}
        {...input}
        className="form-control"
        placeholder={label}
      />
    </div>
  </div>
);

RenderField.propTypes = {
  icon: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  notMatch: PropTypes.bool,          // eslint-disable-line react/require-default-props
  currentPassword: PropTypes.bool,   // eslint-disable-line react/require-default-props
  meta: PropTypes.shape({
    touched: PropTypes.any,
    error: PropTypes.any,
    warning: PropTypes.any,
  }).isRequired,
};

export default RenderField;
