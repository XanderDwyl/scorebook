import { connect } from 'react-redux';

import Login from '../../components/Login/';

import { duckRequest } from '../../ducks';


const mapStateToProps = state => ({
  queryLocale: state.routing.locationBeforeTransitions.query,
});

const mapDispatchToProps = (dispatch, props) => {
  const { location } = props;
  const submitHandler = (params) => {
    const fields = {
      email: params.email,
      password: params.password,
      ...location.query,
    };

    dispatch(duckRequest('LOGIN_REQUEST', fields));
  };

  return { submitHandler };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
