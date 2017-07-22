import { connect } from 'react-redux';

import ForgotPassword from '../components/ForgotPassword';
import { duckRequest } from '../ducks';

const mapStateToProps = state => ({
  queryLocale: state.routing.locationBeforeTransitions.query,
});

const mapDispatchToProps = (dispatch) => {
  const submitHandler = (params) => {
    const fields = {
      email: params.email,
    };

    dispatch(duckRequest('FORGOT_PASSWORD_REQUEST', fields));
  };

  return { submitHandler };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
