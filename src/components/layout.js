import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import Header from './Header';
import Author from './Author';


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
    <div className={wrapperCss}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        bodyAttributes={{ itemscope: true, itemtype: "http://schema.org/WebPage" }}
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
        {children}
      </main>
      <Author gridArea='author'/>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired
};

const LayoutWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            desc,
            themeColor
          }
        }
      }
    `}
    render={data => (
      <TemplateWrapper
        data={data}
      >{children}</TemplateWrapper>
    )}
  />
);

LayoutWrapper.propTypes = {
  children: TemplateWrapper.propTypes.children
};

export default LayoutWrapper;