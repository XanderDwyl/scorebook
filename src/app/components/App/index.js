import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from 'react-breadcrumbs';
import ReduxToastr from 'react-redux-toastr';
import { injectIntl, intlShape } from 'react-intl';

// Relative imports
import Footer from '../../components/Footer';
import Header from '../../containers/Header';
import AppNotification from '../../components/Common/appNotification';

const App = (props) => {
  const { children, isVerified, intl } = props;

  return (
    <div className="app header-fixed aside-menu-fixed aside-menu-hidden">
      <div className="app autolikes-themes">
        <ReduxToastr
          timeOut={3000}
          position="top-center"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />

        <Header {...props} />
        <div className="app-body">
          <main className="main">

            {
              !isVerified &&
              <AppNotification
                message={intl.formatMessage({
                  id: 'app.index.message',
                  defaultMessage: 'Your email is awaiting verification! Please check your inbox and follow the link to start using Autolikes.',
                })}
                route="/profile_settings"
              />
            }
            <Breadcrumbs
              wrapperElement="ol"
              wrapperClass="breadcrumb mb-0"
              itemClass="breadcrumb-item"
              excludes={['Home']}
              separator=""
              routes={props.routes}
              params={props.params}
            />
            <div className="container-fluid">{children}</div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  isVerified: PropTypes.bool.isRequired,
  routes: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  params: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  intl: intlShape.isRequired,
};

export default injectIntl(App);
