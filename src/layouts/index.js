import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import Header from '../components/Header';
import Author from '../components/Author';


const TemplateWrapper = ({ data, children }) => {
  const hMargin = `8vw`;
  const wrapperCss = css(
    {
      display: `grid`,
      margin: `0 ${hMargin}`,
      gridRowGap: rhythm(1.5),
      gridColumnGap: hMargin,
      gridTemplateAreas: `
        "header"
        "content"
        "author"
      `,
    },{
      [MIN_TABLET_MEDIA_QUERY]: {
        gridTemplateColumns: `${rhythm(6)} auto`,
        gridTemplateAreas: `
          "header  header "
          "author  content"
        `
      }
    }
  );
  const mainCss = css({
    gridArea: 'content',
  });

  const site = data.site.siteMetadata;
  return (
    <div id="wrapper" className={wrapperCss}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle={site.title}
        titleTemplate={`%s | ${site.title}`}
        meta={[
          { name: 'description', content: site.desc }
        ]}
        link={[
          { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicons/icon-64.png' }
        ]}
      />
      <Header
        data={site}
        gridArea='header'
        hMargin={hMargin}
      />
      <main className={mainCss}>
        {children()}
      </main>
      <Author gridArea='author'/>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired
};

export default TemplateWrapper;


export const query = graphql`
  query TemplateWrapperQuery {
    site {
      siteMetadata {
        title,
        desc,
        themeColor
      }
    }
  }
`;
