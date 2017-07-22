import React from 'react';
import PropTypes from 'prop-types';

const AppNotify = ({ message, route, klasName }) => (
  <a href={route} className="remove-underscore">
    <div
      className={`alert ${klasName || 'alert-warning'} mb-2 alert-dismissible fade show remove-underscore`}
      role="alert"
    >
      {message}
    </div>
  </a>
);

AppNotify.propTypes = {
  message: PropTypes.string.isRequired,
  route: PropTypes.string,    // eslint-disable-line react/require-default-props
  klasName: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default AppNotify;
