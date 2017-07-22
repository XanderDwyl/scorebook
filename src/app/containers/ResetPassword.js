import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { duckRequest } from '../ducks';
import ResetPasswordForm from '../components/ResetPassword';
import AppHeaderLogo from '../components/Common/appHeaderLogo';

import { _bind } from '../helpers/util';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notMatch: false,
    };

    _bind(['submit'], this);
  }

  submit(values) {
    const { dispatch } = this.props;
    const { uuid, token } = this.props.params;

    if (values.confirmpassword !== values.newpassword) {
      toastr.error('Confirm Password', 'Confirm password incorrect.');
      this.setState({ notMatch: true });
      return;
    }

    this.setState({ notMatch: false });

    const fields = {
      new_password: values.newpassword,
      uuid,
      token,
    };

    dispatch(duckRequest('RESET_PASSWORD_REQUEST', fields));
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <AppHeaderLogo />
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card-group mb-0 p-2">
                <ResetPasswordForm {...this} onSubmit={this.submit} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <p className="text-muted text-center">© 2017 autolik.es. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({
    uuid: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
};

export default connect()(ResetPassword);
