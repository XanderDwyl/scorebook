import React from 'react';

import { getLocale } from '../../constants';
import logo from '../../../assets/img/landing/main/Logo.png';

const AppHeaderLogo = self => (
  <div className="row justify-content-center mb-1">
    <a href={`/${getLocale(self.queryLocale)}`} className="navbar-brand"><img src={logo} alt="" /></a>
  </div>
);

export default AppHeaderLogo;
