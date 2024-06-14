/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Internal Newsletter`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          }
          
          // `gatsby-remark-images-anywhere`,
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     offsetY: `100`,
          //     className: `section-header`, // optional; set class for the anchor tags
          //     elements: [`h1`]
          //   }
          // }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletter-issues`,
        path: `${__dirname}/newsletter-issues`,
      }
    },
    // {
    //   resolve: `gatsby-remark-images-anywhere`,
    //   options: {
    //     /**
    //      * @param {string} staticDir
    //      * Root folder for images. For example,
    //      * if your image path is `/assets/image.png`,
    //      * your image is located in `static/assets/image.png`,
    //      * then the staticDir is `static`.
    //      * You can also point it to whichever else folder you have locally.
    //      */
    //     staticDir: `$(${__dirname}/newsletter-issues)`,
    
    //     /**
    //      * @param {'lazy' | 'eager' | 'auto'} loading 
    //      * Set the output markup's 'loading' attribute. Default: 'lazy'
    //      */
    //     loading: 'lazy',
    
    //     /**
    //      * @param {'fluid' | 'fixed' | 'resize'} sharpMethod
    //      * Default: 'fluid'.
    //      */
    //     sharpMethod: 'fluid',
    //   }
    // },
  ],
}
