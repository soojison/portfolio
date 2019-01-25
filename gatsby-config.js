require(`dotenv`).config({path: `.env`,})

module.exports = {
    siteMetadata: {
        title: `Gatsby`,
        siteUrl: `https://www.gatsbyjs.org`,
        description: `Blazing fast modern site generator for React`,
      },
    plugins: [
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        }
      }
    ],
  }