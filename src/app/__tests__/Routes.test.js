import React from 'react';
import { Route } from 'react-router';
import { shallow } from 'enzyme';

import Routes from '../routes';
import Login from '../containers/Login';
import ForgotPassword from '../containers/ForgotPassword';
import ResetPassword from '../containers/ResetPassword';
import Register from '../containers/Register';
import Verification from '../containers/Verification';
import Grant from '../containers/Grant';

import TermsOfService from '../components/Info/termsOfService';
import Privacy from '../components/Info/privacy';
import Faq from '../components/Info/faq';

describe('Routes', () => {
  let wrapper;
  let pathMap;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
    pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  it('should have `Login` routes', () => {
    expect(pathMap.login).toBe(Login);
  });

  it('should have `forgotpassword` routes', () => {
    expect(pathMap.forgotpassword).toBe(ForgotPassword);
  });

  it('should have `register` routes', () => {
    expect(pathMap.register).toBe(Register);
  });

  it('should have `verify/:uuid/:token` routes', () => {
    expect(pathMap['verify/:uuid/:token']).toBe(Verification);
  });

  it('should have `resetpw/:uuid/:token` routes', () => {
    expect(pathMap['resetpw/:uuid/:token']).toBe(ResetPassword);
  });

  it('should have `request/grant/:token/:igaccess` routes', () => {
    expect(pathMap['request/grant/:token/:igaccess']).toBe(Grant);
  });

  it('should have `terms-of-service` routes', () => {
    expect(pathMap['terms-of-service']).toBe(TermsOfService);
  });

  it('should have `privacy` routes', () => {
    expect(pathMap.privacy).toBe(Privacy);
  });

  it('should have `faq` routes', () => {
    expect(pathMap.faq).toBe(Faq);
  });
});
