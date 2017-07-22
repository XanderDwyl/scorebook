import React from 'react';
import PropTypes from 'prop-types';
import { Iterable } from 'immutable';
import { Link } from 'react-router';
import { Button, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const NavProfile = ({
  state,
  props,
  toggle,
  logoutHandler,
  profileSettingsHandler,
}) => (
  <ul className="nav navbar-nav ml-auto">
    <li className="nav-item dropdown">
      <Dropdown isOpen={state.dropdownOpen} toggle={toggle}>
        <Button
          onClick={toggle}
          className="nav-link dropdown-toggle nav-profile"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded={state.dropdownOpen}
        >
          <i className="fa fa-user" aria-hidden="true" />
          <span className="hidden-md-down"> {props.profile.get('email')}</span>
        </Button>

        <DropdownMenu className="dropdown-menu-right">
          <DropdownItem header className="text-center">
            <strong>
              <FormattedMessage
                id="header.nav.profile"
                defaultMessage="Profile"
              />
            </strong>
          </DropdownItem>
          <DropdownItem onClick={profileSettingsHandler}>
            <Link to={'/profile_settings'} className="dropdown-item p-0">
              <i className="fa fa-wrench" />{' '}
              <FormattedMessage
                id="header.nav.settings"
                defaultMessage="Settings"
              />
            </Link>
          </DropdownItem>
          <DropdownItem className="dropdown-item" onClick={logoutHandler}>
            <i className="fa fa-lock" />{' '}
            <FormattedMessage id="header.nav.logout" defaultMessage="Logout" />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </li>
    <li className="nav-item hidden-md-down" />
  </ul>
);

NavProfile.propTypes = {
  state: PropTypes.shape({}).isRequired,
  props: PropTypes.shape({}).isRequired,
  profile: PropTypes.instanceOf(Iterable), // eslint-disable-line react/require-default-props,
  toggle: PropTypes.func.isRequired,
  logoutHandler: PropTypes.func.isRequired,
  profileSettingsHandler: PropTypes.func.isRequired,
};

export default NavProfile;
