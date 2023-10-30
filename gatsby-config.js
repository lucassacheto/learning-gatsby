/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `learning-gatsby`,
    description: `learning-gatsby`,
    navBar: [
      {
        "id": 1,
        "name": "google",
        "url": "http://google.com"
      },
      {
          "id": 2,
          "name": "klick.com",
          "url": "http://klick.com"
      },
      {
          "id": 3,
          "name": "unity",
          "url": "http://unity.com"
      }
    ]
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};