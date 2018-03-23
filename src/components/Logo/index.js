
import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = ({title}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="116px" height="76px" version="1.1" viewBox="0 0 116 76">
    <title>{title}</title>
    <g className="jhi-logo__main">
      <g className="jhi-logo__connectors">
        <rect x="10" y="60" width="16" height="16" />
        <rect x="20" y="28" width="16" height="40" />
        <rect x="40" y="8" width="16" height="59" />
        <rect x="56" y="40" width="12" height="16" />
        <rect x="60" y="47" width="16" height="20" />
      </g>
      <circle cx="8" cy="68" r="8" />
      <circle cx="28" cy="68" r="8" />
      <circle cx="28" cy="28" r="8" />
      <circle cx="28" cy="8" r="8" />
      <circle cx="48" cy="68" r="8" />
      <circle cx="48" cy="8" r="8" />
      <circle cx="68" cy="48" r="8" />
      <circle cx="68" cy="68" r="8" />
    </g>
    <g className="jhi-logo__suffix">
      <g className="jhi-logo__connectors">
        <rect width="16" height="20" x="100" y="48" />
      </g>
      <circle cx="88" cy="68" r="8" />
      <circle cx="108" cy="48" r="8" />
      <circle cx="108" cy="68" r="8" />
      <circle cx="108" cy="28" r="8" />
    </g>
  </svg>
);

Logo.propTypes = {
  title: PropTypes.string
};

export default Logo;
