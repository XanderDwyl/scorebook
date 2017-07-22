import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, intlShape, FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { getLocale } from '../../constants';

import { required, email, minLength } from '../Common/validate';
import RegisterRenderField from '../Common/textBoxRenderField';

const notifyHtml = (query) => {
  let notify = 'register.form.agree_html';

  if (query && query.locale) {
    notify = `register.form.agree_html.${query.locale}`;
  }

  return notify;
};

const defaultAgreeMsg = (queryLocale) => {
  let agreeMsg = 'By signing up, you agree to the <a className="btn-link" href=/terms-of-service/';
  agreeMsg += `${queryLocale}>Terms of Service</a>`;
  agreeMsg += ' and <a className="btn-link" href=/privacy/';
  agreeMsg += `${queryLocale}>Privacy Policy</a>, including Cookie Use.`;

  return agreeMsg;
};

const RegisterForm = ({ handleSubmit, submitting, intl, queryLocale }) => (
  <div className="card">
    <div className="card-block auth-form">
      <form onSubmit={handleSubmit}>
        <h1><FormattedMessage id="register.form.sign_up" defaultMessage="SIGN UP" /></h1>
        <p className="text-muted">
          <FormattedMessage id="register.form.create" defaultMessage="Create your account" />
        </p>
        <div>
          <Field
            name="email"
            type="email"
            component={RegisterRenderField}
            label={intl.formatMessage({ id: 'form.email_address', defaultMessage: 'Email Address' })}
            validate={[required, email]}
            icon="icon-envelope-letter"

          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            component={RegisterRenderField}
            label={intl.formatMessage({ id: 'form.password', defaultMessage: 'Password' })}
            validate={[required, minLength(8)]}
            icon="icon-lock"
          />
        </div>
        <div>
          <Field
            name="confirmpassword"
            type="password"
            component={RegisterRenderField}
            label={intl.formatMessage({ id: 'form.password_confirm', defaultMessage: 'Confirm Password' })}
            validate={[required, minLength(8)]}
            icon="icon-lock"
          />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <button
              className="btn btn-block btn-primary px-2"
              type="submit"
              disabled={submitting}
            >
              <FormattedMessage id="register.form.sign_up_button" defaultMessage="Sign Up" />
            </button>
          </div>
          <div className="col-xs-12 col-sm-6 move-right">
            <a className="px-0" href={`/login/${getLocale(queryLocale)}`}>
              <FormattedMessage
                id="register.form.sign_in"
                defaultMessage="Sign in now!"
              /> <i className="fa fa-angle-double-right" />
            </a>
          </div>
        </div>
      </form>
      <div className="text-muted mt-1">
        <FormattedHTMLMessage
          id={notifyHtml(queryLocale)}
          defaultMessage={defaultAgreeMsg(`${getLocale(queryLocale)}`)}
        />
      </div>
    </div>
  </div>
);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  queryLocale: PropTypes.shape({}).isRequired,
  intl: intlShape.isRequired,
};

export default reduxForm({ form: 'loginForm' })(injectIntl(RegisterForm));
