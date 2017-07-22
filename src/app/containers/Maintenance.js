
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import config from '../constants/config';
import MaintenanceView from '../components/Maintenance';

class Maintenance extends Component {
  componentWillMount() {
    if (!config.maintenance) {
      this.props.dispatch(push('/'));
    }
  }

  render() { // eslint-disable-line class-methods-use-this
    return <MaintenanceView />;
  }
}

Maintenance.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Maintenance);
