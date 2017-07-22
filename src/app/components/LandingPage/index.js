import React from 'react';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';

const App = (props) => {
  const { children } = props;
  return (
    <div className="app">
      <ReduxToastr
        timeOut={4000}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />

      <div className="">{children}</div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
