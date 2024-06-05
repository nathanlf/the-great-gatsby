/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
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
