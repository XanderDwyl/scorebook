import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const Footer = () => (
  <footer className="app-footer">
    <Link to={'/'}> ScoreBook &copy; 2017 </Link>
    <span className="separator" />
    <a href={'?locale=en'}>En<span className="hidden-xs-down">glish</span></a>
    <a href={'?locale=ja'}>日<span className="hidden-xs-down">本語</span></a>

    <span className="float-right">
      <Link to={'/faq'}>
        <i className="icon-wrench" />{' '}
        <span className="hidden-xs-down">
          <FormattedMessage
            id="footer.index.faq"
            defaultMessage="FAQ & Support"
          />
        </span>
      </Link>
      <Link to={'/terms-of-service'}>
        <i className="icon-notebook" />{' '}
        <span className="hidden-xs-down">
          <FormattedMessage
            id="footer.index.terms"
            defaultMessage="TERMS OF SERVICES"
          />
        </span>{' '}
      </Link>
      <Link to={'/privacy'}>
        <i className="icon-book-open" />{' '}
        <span className="hidden-xs-down">
          <FormattedMessage
            id="footer.index.privacy"
            defaultMessage="Privacy Policy"
          />
        </span>{' '}
      </Link>
    </span>
  </footer>
);
export default Footer;
