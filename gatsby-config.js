require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Stani Prez`,
    siteUrl: `https://www.staniprez.fr`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Stani Prez`,
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Oswald:500",
            "Raleway:300,400",
            "Rochester",
            "Lato",
            "Roboto:400,500",
            "Merriweather Sans",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.DB_SPACEID,
        accessToken: process.env.DB_TOKEN,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    /* {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            variants: [`500`],
            subsets: [`latin`],
          },
          {
            family: `Raleway`,
            variants: [`300`, `400`],
          },
          { family: `Rochester` },
          { family: `Lato` },
          {
            family: `Roboto `,
            variants: [`400`, `500`],
          },
          { family: "Merriweather Sans" },
        ],
      },
    }, */

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
