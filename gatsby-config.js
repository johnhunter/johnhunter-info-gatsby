const title = 'johnhunter.info';
const primaryThemeColor = '#1ab2ff';

module.exports = {
  siteMetadata: {
    title: title,
    desc: 'Personal blog of John Hunter',
    themeColor: primaryThemeColor
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: 'jh.i',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: primaryThemeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },{
            src: `/favicons/icon-256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },{
            src: `/favicons/icon-128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },{
            src: `/favicons/icon-64.png`,
            sizes: `64x64`,
            type: `image/png`,
          },{
            src: `/favicons/icon-32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },{
            src: `/favicons/icon-16.png`,
            sizes: `16x16`,
            type: `image/png`,
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    // make sure to put last in the array
    {
      resolve: `gatsby-plugin-netlify`,
      options: {}
    }
  ],
};
