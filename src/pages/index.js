import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';


const IndexPage = ({ data }) => (
  <div itemScope itemType="http://schema.org/Blog">
    <h1>Hi people</h1>
    <p>{data.allMarkdownRemark.totalCount} Posts</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} itemProp="blogPosts" itemScope itemType="http://schema.org/BlogPosting">
        <h2>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
            <time>{node.frontmatter.date}</time>
          </Link>
        </h2>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;


export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
