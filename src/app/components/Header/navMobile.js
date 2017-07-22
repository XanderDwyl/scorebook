import React from 'react';
import PropTypes from 'prop-types';

const NavMobile = ({ sidebarToggle }) => (
  <ul className="nav navbar-nav hidden-md-down">
    <li className="nav-item">
      <span
        className="btn nav-link navbar-toggler sidebar-toggler"
        onClick={sidebarToggle}
        role="presentation"
      >&#9776;</span>
    </li>
  </ul>
);

NavMobile.propTypes = {
  sidebarToggle: PropTypes.func.isRequired,
};

export default NavMobile;
