import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { rhythm } from "../../utils/typography";
import avatarImage from './john.hunter-bw.jpg';


const Author = ({ gridArea }) => {
  const authorCss = css({
    gridArea: gridArea,
  });
  const avatarCss = css({
    borderRadius: `50%`,
    width: rhythm(3),
    height: rhythm(3),
    margin: `0`, // override typographyjs,
    // filter: "sepia(50%) hue-rotate(140deg)"
  });

  return (
    <aside className={authorCss}>
      <img className={avatarCss} src={avatarImage} alt="John Hunter"/>
      <p>A short bio will be here.</p>
    </aside>
  );
};

Author.propTypes = {
  gridArea: PropTypes.string
};

export default Author;
