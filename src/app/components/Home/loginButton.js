import React from 'react';
import { Link } from 'react-router';

const LoginButton = () => (
  <Link className="uk-button uk-button-primary uk-button-large" to="/login">
    CLICK HERE TO LOG IN
  </Link>
);

export default LoginButton;
