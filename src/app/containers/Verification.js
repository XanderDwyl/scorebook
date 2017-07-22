import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { duckRequest } from '../ducks';
import Fetching from '../components/Common/loader';

class Verification extends Component {
  componentWillMount() {
    const { dispatch, params } = this.props;
    const { uuid, token } = params;

    const fields = { token, uuid };
    dispatch(duckRequest('VERIFY_EMAIL_REQUEST', fields));
  }

  render() {  // eslint-disable-line class-methods-use-this
    return (
      <Fetching
        msg="Please wait while we verify your account"
        color="primary"
        position="fetching"
      />
    );
  }
}

Verification.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({
    uuid: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
  auth_token: state.auth.get('token'),
});

export default connect(mapStateToProps)(Verification);
