import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default function requireAuth(Component) {
  class Auth extends PureComponent {
    componentWillMount() {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated) {
      if (!isAuthenticated) {
        const { location, dispatch } = this.props;
        const redirectAfterLogin = `${location.pathname}${location.search}`;

        if (location.search) {
          dispatch(push(`/login${location.search}&redirect_url=${redirectAfterLogin}`));
          return;
        }
        dispatch(push(`/login?redirect_url=${redirectAfterLogin}`));
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated && <Component {...this.props} />}
        </div>
      );
    }
  }

  Auth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  const mapStateToProps = state => ({
    isVerified: state.user.getIn(['profile', 'email_verified']),
    isAuthenticated: state.auth.get('isAuthenticated'),
  });

  return connect(mapStateToProps)(Auth);
}
