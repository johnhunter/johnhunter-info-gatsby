
import React from 'react';
import PropTypes from 'prop-types';
import { css } from "glamor";

const Logo = ({title}) => {
  const logoCss = css({
    width: `116px`,
    height: `76px`,
    transition: `all .5s .5s`
  });
  const mainDotsCss = css({
    fill: `hsl(200, 100%, 20%)`
  });
  const mainConnectorCss = css({
    fill: `hsl(200, 100%, 40%)`
  });
  const suffixDotsCss = css({
    fill: `hsl(200, 60%, 40%)`
  });
  const suffixConnectorCss = css({
    fill: `hsl(200, 50%, 90%)`
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={logoCss}>
      <title>{title}</title>
      <g className={mainConnectorCss}>
        <rect x="10" y="60" width="16" height="16" />
        <rect x="20" y="28" width="16" height="40" />
        <rect x="40" y="8" width="16" height="59" />
        <rect x="56" y="40" width="12" height="16" />
        <rect x="60" y="47" width="16" height="20" />
      </g>
      <g className={mainDotsCss}>
        <circle cx="8" cy="68" r="8" />
        <circle cx="28" cy="68" r="8" />
        <circle cx="28" cy="28" r="8" />
        <circle cx="28" cy="8" r="8" />
        <circle cx="48" cy="68" r="8" />
        <circle cx="48" cy="8" r="8" />
        <circle cx="68" cy="48" r="8" />
        <circle cx="68" cy="68" r="8" />
      </g>
      <g className={suffixConnectorCss}>
        <rect width="16" height="20" x="100" y="48" />
      </g>
      <g className={suffixDotsCss}>
        <circle cx="88" cy="68" r="8" />
        <circle cx="108" cy="48" r="8" />
        <circle cx="108" cy="68" r="8" />
        <circle cx="108" cy="28" r="8" />
      </g>
    </svg>
  );
};

Logo.propTypes = {
  title: PropTypes.string
};

export default Logo;
