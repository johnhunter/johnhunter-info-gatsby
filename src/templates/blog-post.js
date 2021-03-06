import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';


const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const fm = post.frontmatter;
  return (
    <article itemScope itemType="http://schema.org/BlogPosting">
      <Helmet title={fm.title} />
      <header>
        <h1 itemProp="name">
          {fm.title}
          <time>{fm.date}</time>
        </h1>
      </header>
      <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
      <footer>
        <p>Written on <b>{fm.date}</b></p>
      </footer>
    </article>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPostTemplate;


export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`;
