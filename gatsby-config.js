module.exports = {
  siteMetadata: {
    title: `Pop'z BBQ & Catering - Bad to the Bone`,
    description: `Pop’z BBQ & Catering was developed with one thing in mind; to provide people with delicious, cooked to order South Georgia style BBQ. Developing a reputation for some of the best South Georgia style BBQ. Our menu has expanded over the years and includes a large variety of options that are truly delicious.`,
    author: `@0xhjohnson`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pop'z BBQ`,
        short_name: `Pop'z BBQ`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`
  ]
};
