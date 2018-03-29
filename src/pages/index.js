import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const IndexPage = ({ data }) => (
  <main>
    <h1>Hi people</h1>
    <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}{" "}
            <span>— {node.frontmatter.date}</span>
          </Link>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </main>
);

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
