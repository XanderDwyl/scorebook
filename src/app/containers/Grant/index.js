import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fetching from '../../components/Common/loader';

import { duckRequest } from '../../ducks';

class Grant extends Component {

  componentWillMount() {
    const { dispatch } = this.props;

    const fields = {
      token: this.props.params.token,
      igToken: this.props.params.igaccess,
    };

    dispatch(duckRequest('GRANT_INSTAGRAM_USER_REQUEST', fields));
  }


  render() { // eslint-disable-line class-methods-use-this
    return (
      <Fetching
        msg="Please wait while we process your request"
        color="primary"
        position="fetching"
      />
    );
  }
}

Grant.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({
    token: PropTypes.string,
    igaccess: PropTypes.string,
  }).isRequired,
};


export default connect()(Grant);
