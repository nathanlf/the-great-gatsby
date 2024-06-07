/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    title: "Internal Newsletter",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `newsletter-issues`,
        path: `${__dirname}/newsletter-issues`,
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    //"gatsby-mdx-fix",
    // {
    //   resolve: "gatsby-source-google-docs",
    //   options: {
    //     // https://drive.google.com/drive/folders/1ryiW1fQLR-xiHm9Zh2-llnCQQw9aGeZU
    //     folder: "1ryiW1fQLR-xiHm9Zh2-llnCQQw9aGeZU",
    //     createPages: true
    //   },
    // }, "gatsby-plugin-mdx",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `./src/pages`,
    //   },
    // },
  ],
}
