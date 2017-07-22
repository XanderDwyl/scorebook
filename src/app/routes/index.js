import React, { PureComponent } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// Containers
import Register from '../containers/Register';
import Login from '../containers/Login';
import ForgotPassword from '../containers/ForgotPassword';
import ResetPassword from '../containers/ResetPassword';
import Home from '../containers/Home';
import Verification from '../containers/Verification';
import Grant from '../containers/Grant';
// import requireAuth from '../containers/Auth';
import Maintenance from '../containers/Maintenance';

// Presentational
// import App from '../components/App';
import LandingPage from '../components/LandingPage';
import NotFound from '../components/NotFound';

class Routes extends PureComponent {
  render() {
    return (
      <Router {...this.props}>
        <Route path="/" component={LandingPage}>
          <IndexRoute component={Home} />
          <Route path="login" component={Login} />
          <Route path="forgotpassword" component={ForgotPassword} />
          <Route path="register" component={Register} />
          <Route path="verify/:uuid/:token" component={Verification} />
          <Route path="resetpw/:uuid/:token" component={ResetPassword} />
          <Route path="request/grant/:token/:igaccess" component={Grant} />
          <Route path="maintenance" component={Maintenance} />
        </Route>

        {/*
          <Route path="/" name="Home" component={requireAuth(App)}>
            <Route path="dashboard" name="Dashboard" component=""></Route>
          </Route>
        */}

        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

export default Routes;
