import React from "react";
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const fm = post.frontmatter;
  return (
    <article itemScope itemType="http://schema.org/BlogPosting">
      <Helmet title={fm.title} />
      <h1 itemProp="name">{fm.title}</h1>
      <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired
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
