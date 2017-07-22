import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { getLocale } from '../../constants';
import Footer from './footer';


const Home = self => (
  <div className="landing">
    <div className="main-landing">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm header">
          <div className="navbar-header">
            <a href={`//${getLocale(self.queryLocale)}`} className="navbar-brand">ScoreBook</a>
            <Link href={`/register/${getLocale(self.queryLocale)}`} className="sign-up-links hidden-md-up">
              <FormattedMessage
                id="home.index.header.sign_up"
                defaultMessage="SIGN UP"
              />
            </Link>
            <Link to={`/login/${getLocale(self.queryLocale)}`} className="sign-up-links hidden-md-up">
              <FormattedMessage
                id="home.index.header.sign_in"
                defaultMessage="SIGN IN"
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link href={`/register/${getLocale(self.queryLocale)}`} className="sign-up-links sign-up">
                  <FormattedMessage
                    id="home.index.header.sign_up"
                    defaultMessage="SIGN UP"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/login/${getLocale(self.queryLocale)}`} className="sign-up-links">
                  <FormattedMessage
                    id="home.index.header.sign_in"
                    defaultMessage="SIGN IN"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          ScoreBook
        </div>
      </div>
    </div>

    <Footer {...self} />
  </div>
);

export default Home;
