import { connect } from 'react-redux';

import Register from '../components/Register';
import { duckRequest, duckFailed } from '../ducks';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
  queryLocale: state.routing.locationBeforeTransitions.query,
});

const mapDispatchToProps = (dispatch) => {
  const submitHandler = (params) => {
    if (params.password !== params.confirmpassword) {
      dispatch(duckFailed('CREATE_USER_FAILED', { message: 'Password is not confirmed!' }));
      return;
    }

    const fields = {
      email: params.email,
      password: params.password,
    };

    dispatch(duckRequest('CREATE_USER_REQUEST', fields));
  };

  return { submitHandler };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
