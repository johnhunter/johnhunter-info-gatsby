import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { css } from "glamor";
import { rhythm } from "../../utils/typography";
import Logo from '../Logo';


const Header = ({ title, themeColor }) => {
  const headerCss = css({
    background: themeColor,
    marginBottom: rhythm(1),
  });
  const innerCss = css({
    margin: `0 auto`,
    maxWidth: 960,
    padding: `${rhythm(1)} ${rhythm(1.5)}`,
  });
  const unstyledLinkCss = css({
    display: `inline-block`,
    background: `none`,
    ':hover': {
      background: `none`
    }
  });

  return (
    <header className={headerCss}>
      <div className={innerCss}>
        <Link to="/" className={unstyledLinkCss}>
          <Logo title={title} />
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  themeColor: PropTypes.string
};

export default Header;
