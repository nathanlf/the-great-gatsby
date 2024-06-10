/**
 * @type {import('gatsby').GatsbyConfig}
 */

// import * as dotenv from 'dotenv'

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// dotenv.config({path: '.env'});

module.exports = {
  siteMetadata: {
    title: "Internal Newsletter",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `newsletter-issues`,
        path: `${__dirname}/newsletter-issues`,
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
