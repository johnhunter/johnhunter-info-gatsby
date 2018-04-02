import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import { rhythm, slh } from '../../utils/typography';
import avatarImage from './john.hunter-bw.jpg';


const Author = ({ gridArea }) => {
  const authorCss = css(
    {
      gridArea: gridArea,
      display: `flex`,
      flexDirection: `row`,
      alignItems: `center`,
      borderTop: `1px solid ${slh(10, 70)}`,
      padding: `${rhythm(.5)} 0`,
      '& > div': {
        margin: `0 0 0 ${rhythm(1)}`
      }
    },{
      [MIN_TABLET_MEDIA_QUERY]: {
        marginTop: `${rhythm(2)}`,
        borderTop: `none`,
        flexDirection: `column`,
        alignItems: `flex-end`,
        textAlign: `right`,
        '& > div': {
          margin: 0
        }
      }
    }
  );
  const avatarCss = css({
    borderRadius: `50%`,
    width: rhythm(3),
    height: rhythm(3),
    margin: 0, // override typographyjs,
  });

  return (
    <aside className={authorCss}>
      <img className={avatarCss} src={avatarImage} alt=""/>
      <div>
        <h3>John Hunter</h3>
        <p>A short bio will be here.</p>
      </div>
    </aside>
  );
};

Author.propTypes = {
  gridArea: PropTypes.string
};

export default Author;
