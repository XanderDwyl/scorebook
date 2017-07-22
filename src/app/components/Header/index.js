import React from 'react';

import NavMobile from './navMobile';
import NavProfile from './navProfile';

const Header = self => (
  <header className="app-header navbar">
    <button
      className="navbar-toggler mobile-sidebar-toggler hidden-lg-up"
      onClick={self.mobileSidebarToggle}
      type="button"
    >&#9776;</button>
    <a className="navbar-brand" href="/">scorebook</a>
    <NavMobile {...self} />
    <NavProfile {...self} />
  </header>
);

export default Header;
