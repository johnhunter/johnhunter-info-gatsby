import React from "react";
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const fm = post.frontmatter;
  return (
    <div>
      <Helmet title={fm.title} />
      <h1>{fm.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object
};

export default BlogPostTemplate;


export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
