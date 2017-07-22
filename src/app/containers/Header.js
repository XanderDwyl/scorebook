import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import NavHeader from '../components/Header';

import { duckRequest } from '../ducks';
import { _bind } from '../helpers/util';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { dropdownOpen: false };

    _bind([
      'toggle',
      'sidebarToggle',
      'mobileSidebarToggle',
      'logoutHandler',
      'profileSettingsHandler',
    ], this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  sidebarToggle(e) { // eslint-disable-line class-methods-use-this
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) { // eslint-disable-line class-methods-use-this
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  logoutHandler(e) {
    e.preventDefault();
    const { dispatch, location } = this.props;

    dispatch(duckRequest('LOGOUT_REQUEST', { notify: true, ...location.query }));
  }

  profileSettingsHandler(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(push('/profile_settings'));
  }

  render() {
    return (
      <div>
        <NavHeader {...this} />
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
  profile: state.user.get('profile'),
});

export default connect(mapStateToProps)(Header);
