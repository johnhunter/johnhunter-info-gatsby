import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';


const TemplateWrapper = ({ children, data }) => {
  const meta = data.site.siteMetadata;
  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={meta.title}
        meta={[
          { name: 'description', content: meta.desc }
        ]}
        link={[
          { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicons/icon-64.png' }
        ]}
      />
      <Header
        title={meta.title}
        themeColor={meta.themeColor}
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
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
