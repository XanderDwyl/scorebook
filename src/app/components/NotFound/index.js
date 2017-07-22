import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NotFound = ({ isAuthenticated }) => {
  const backTo = isAuthenticated ? 'Dashboard' : 'Homepage';
  return (
    <div className="app autolikes-themes flex-row align-items-center">
      <div className="container">
        <div className="text-center">
          <h1 className="display-3 mr-2">404</h1>
          <h4 className="pt-1 text-uppercase">Page Not found</h4>
          <p className="text-muted">
            This is not the page you are looking for.
          </p>
          <a href="/" className="btn btn-info pl-2 pr-2">
            Back To {backTo}
            {' '}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
});

export default connect(mapStateToProps)(NotFound);
