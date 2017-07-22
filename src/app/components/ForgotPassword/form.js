import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, intlShape, FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// Relative imports
import { getLocale } from '../../constants';
import { required, email } from '../Common/validate';
import LoginRenderField from '../Common/textBoxRenderField';

const i18nMsg = (query, id) => {
  let formatId = id;

  if (query && query.locale) {
    formatId = `${formatId}.${query.locale}`;
  }

  return formatId;
};

const defaultRecoverPassword = 'To recover your password, enter the email address you use to sign in to Autolikes.';

const defaultRegisterForm = (queryLocale) => {
  let registerMsg = "Don't have an account yet? <a className='btn-link' href='/register";
  registerMsg += `${queryLocale}>Sign up now!</a>`;

  return registerMsg;
};

const ForgotPasswordForm = ({ handleSubmit, submitting, intl, queryLocale }) => (
  <div className="card">
    <div className="card-block auth-form">
      <h4>
        <FormattedMessage
          id="forgot.form.recover_password"
          defaultMessage="Recover Your Password"
        />
      </h4>
      <p className="text-muted">
        <FormattedMessage
          id="forgot.form.recover_howto"
          defaultMessage={defaultRecoverPassword}
        />
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            type="email"
            component={LoginRenderField}
            label={intl.formatMessage({ id: 'form.email_address', defaultMessage: 'Email Address' })}
            validate={[required, email]}
            icon="icon-envelope-letter"
          />
        </div>
        <div className="text-muted mt-1">
          <p>
            <FormattedHTMLMessage
              id={i18nMsg(queryLocale, 'forgot.form.register_html')}
              defaultMessage={defaultRegisterForm(`${getLocale(queryLocale)}`)}
            />
          </p>
          <button className="btn btn-block btn-primary px-2" type="submit" disabled={submitting}>
            <FormattedMessage id="forgot.form.recover_btn" defaultMessage="Recover Password" />
          </button>
        </div>
      </form>
    </div>
  </div>
);

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  queryLocale: PropTypes.shape({}).isRequired,
  intl: intlShape.isRequired,
};

export default reduxForm({ form: 'forgotPasswordForm' })(injectIntl(ForgotPasswordForm));
