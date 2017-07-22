import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Home from '../components/Home';

class HomePage extends Component {
  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;

    if (isAuthenticated) {
      dispatch(push('/dashboard'));
    }
  }

  render() {
    // eslint-disable-line class-methods-use-this
    return <Home {...this.props} />;
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
  queryLocale: state.routing.locationBeforeTransitions.query,
});

export default connect(mapStateToProps)(HomePage);
