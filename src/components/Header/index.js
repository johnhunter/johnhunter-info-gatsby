import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const Header = ({ title, themeColor }) => (
  <div
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {title}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  themeColor: PropTypes.string
};

export default Header;
