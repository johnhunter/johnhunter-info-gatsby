import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import './index.css';


const TemplateWrapper = ({ children, data }) => {
  const metaData = data.site.siteMetadata;
  const meta = [
    { name: 'description', content: metaData.desc },
  ];
  return (
    <div>
      <Helmet
        title={metaData.title}
        meta={meta}
      />
      <Header title={metaData.title}/>
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
        desc
      }
    }
  }
`;
