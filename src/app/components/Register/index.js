import React from 'react';
import PropTypes from 'prop-types';

import RegisterForm from './form';

// import AppHeaderLogo from '../Common/appHeaderLogo';
import AppFooter from '../Common/appFooter';

const Register = self => (
  <div className="app flex-row align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-group">
            <RegisterForm {...self} onSubmit={self.submitHandler} />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
  );

Register.propTypes = { isAuthenticated: PropTypes.bool.isRequired };

export default Register;
