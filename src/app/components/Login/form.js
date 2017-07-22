import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { injectIntl, intlShape, FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { getLocale } from '../../constants';
import { required, email, minLength } from '../Common/validate';
import LoginRenderField from '../Common/textBoxRenderField';

const agreeHtml = (query) => {
  let agree = 'login.form.register_html';

  if (query && query.locale) {
    agree = `login.form.register_html.${query.locale}`;
  }

  return agree;
};

const defaultNotify = (queryLocale) => {
  let registerMsg = 'New to Autolikes? <a className="btn-link" href=/register/';
  registerMsg += `${queryLocale}>Sign up now <i className='fa fa-angle-double-right' /></a>`;

  return registerMsg;
};

const LoginForm = ({ handleSubmit, submitting, intl, queryLocale }) => (
  <div className="card">
    <div className="card-block auth-form">
      <h1><FormattedMessage id="login.form.sign_in" defaultMessage="SIGN IN" /></h1>
      <p className="text-muted">
        <FormattedMessage id="login.form.sign_in_text" defaultMessage="Sign in to your account" />
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
        <div>
          <Field
            name="password"
            type="password"
            component={LoginRenderField}
            label={intl.formatMessage({ id: 'form.password', defaultMessage: 'Password' })}
            validate={[required, minLength(8)]}
            icon="icon-key icons d-block"
          />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <button
              className="btn btn-block btn-primary px-2"
              type="submit"
              disabled={submitting}
            >
              <FormattedMessage id="login.form.sign_in_button" defaultMessage="SIGN IN" />
            </button>
          </div>
          <div className="col-xs-12 col-sm-6 move-right">
            <Link className="p-0" to={`/forgotpassword/${getLocale(queryLocale)}`}>
              <FormattedMessage id="login.form.forgot" defaultMessage="Forgot your password?" />
            </Link>
          </div>
        </div>
        <div className="text-muted mt-1">
          <FormattedHTMLMessage
            id={agreeHtml(queryLocale)}
            defaultMessage={defaultNotify(`${getLocale(queryLocale)}`)}
          />
        </div>
      </form>
    </div>
  </div>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  queryLocale: PropTypes.shape({}).isRequired,
  intl: intlShape.isRequired,
};

export default reduxForm({ form: 'loginForm' })(injectIntl(LoginForm));
