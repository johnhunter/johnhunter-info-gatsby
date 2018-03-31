import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import Header from '../components/Header';


const TemplateWrapper = ({ children, data }) => {
  const site = data.site.siteMetadata;
  const mainCss = css({
    margin: '0 auto',
    maxWidth: 960,
    padding: `0px ${rhythm(1.5)} ${rhythm(1)}`
  });
  const authorCss = css({

  });

  return (
    <div id="wrapper">
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
        title={site.title}
        themeColor={site.themeColor}
      />
      <main className={mainCss}>
        {children()}
      </main>
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
