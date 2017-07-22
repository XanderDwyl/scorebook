import React from 'react';
import PropTypes from 'prop-types';

const speedFilterRenderField = ({
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
    <div className="input-group">
      <span className="input-group-addon "><i className={icon} /></span>
      <input
        type={type}
        {...input}
        className="form-control"
        placeholder={label}
      />
    </div>
  </div>
);

speedFilterRenderField.propTypes = {
  icon: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
};
export default speedFilterRenderField;
