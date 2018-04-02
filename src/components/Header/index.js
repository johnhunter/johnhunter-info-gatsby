import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { css } from "glamor";
import { rhythm } from "../../utils/typography";
import Logo from '../Logo';


const Header = ({ siteData, gridArea, hMargin = 0 }) => {
  const headerCss = css({
    gridArea: gridArea,
    margin: `0 -${hMargin}`,
    backgroundColor: siteData.themeColor,
  });
  const innerCss = css({
    margin: `0 auto`,
    padding: `${rhythm(1)} ${hMargin || rhythm(1.5)}`,
  });
  const unstyledLinkCss = css({
    display: `inline-block`,
    background: `none`,
    lineHeight: .65,
    ':hover': {
      background: `none`
    }
  });

  return (
    <header className={headerCss}>
      <div className={innerCss}>
        <Link to="/" className={unstyledLinkCss}>
          <Logo title={siteData.title} />
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteData: PropTypes.object,
  gridArea: PropTypes.string,
  hMargin: PropTypes.string
};

export default Header;
