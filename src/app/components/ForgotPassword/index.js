import React from 'react';

import ForgotPasswordForm from './form';
import AppFooter from '../Common/appFooter';

const ForgotPassword = (self) => {
  const { submitHandler } = self;

  return (
    <div className="app flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <ForgotPasswordForm {...self} onSubmit={submitHandler} />
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default ForgotPassword;
