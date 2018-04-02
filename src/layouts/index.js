import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import Header from '../components/Header';
import Author from '../components/Author';


const TemplateWrapper = ({ data, children }) => {
  const site = data.site.siteMetadata;
  const hMargin = `8vw`;
  const wrapperCss = css(
    {
      display: `grid`,
      margin: `0 ${hMargin}`,
      gridGap: `${rhythm(1.5)}`,
      gridTemplateAreas: `
        "header"
        "content"
        "author"
      `,
    },{
      [MIN_MOBILE_MEDIA_QUERY]: {
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
        siteData={site}
        gridArea='header'
        hMargin={hMargin}
      />
      <main className={mainCss}>{children()}</main>
      <Author gridArea='author'/>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
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
