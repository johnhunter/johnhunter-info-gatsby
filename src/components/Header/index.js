import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from '../Logo';


const Header = ({ title, themeColor }) => (
  <header
    style={{
      background: themeColor,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link to="/"
        style={{ background: 'none' }}
      >
        <Logo title={title} />
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  themeColor: PropTypes.string
};

export default Header;
