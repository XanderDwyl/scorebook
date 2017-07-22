import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Relative imports
import { required, minLength } from '../Common/validate';
import LoginRenderField from '../Common/textBoxRenderField';

const RecoverPasswordForm = ({ handleSubmit, isSubmit, state, intl }) => (
  <div className="card p-2">
    <div className="card-block">
      <h4>
        <FormattedMessage id="resetpw.index.reset_password" defaultMessage="Reset Password" />
      </h4>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="newpassword"
            type="password"
            component={LoginRenderField}
            label={intl.formatMessage({ id: 'form.password', defaultMessage: 'Password' })}
            validate={[required, minLength(8)]}
            icon="icon-key"
            notMatch={state.notMatch || false}
          />
        </div>

        <div>
          <Field
            name="confirmpassword"
            type="password"
            component={LoginRenderField}
            label={intl.formatMessage({ id: 'form.password_confirm', defaultMessage: 'Password Confirm' })}
            validate={[required, minLength(8)]}
            icon="icon-key"
            notMatch={state.notMatch || false}
          />
        </div>
        <div className="text-muted mt-1">
          <button
            className="btn btn-block btn-success px-2"
            type="submit"
            disabled={isSubmit || false}
          >
            <FormattedMessage id="resetpw.index.set_password" defaultMessage="Set Password" />
          </button>
        </div>
      </form>
    </div>
  </div>
);

RecoverPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmit: PropTypes.bool, // eslint-disable-line react/require-default-props
  state: PropTypes.shape({}).isRequired,
  intl: intlShape.isRequired,
};

export default reduxForm({ form: 'recoverPasswordForm' })(injectIntl(RecoverPasswordForm));
