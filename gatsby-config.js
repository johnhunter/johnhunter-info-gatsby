module.exports = {
  siteMetadata: {
    title: 'johnhunter.info',
    desc: 'Personal blog of John Hunter'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
