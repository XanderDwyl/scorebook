import React from 'react';

import AppFooter from '../Common/appFooter';
import LoginForm from './form';


const Login = self => (
  <div className="app flex-row align-items-center">
    <div className="container">
      {/* <AppHeaderLogo {...self} /> */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-group">
            <LoginForm {...self} onSubmit={self.submitHandler} />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
  );

export default Login;
