module.exports = {
  siteMetadata: {
    title: `Pop'z BBQ & Catering - Bad to the Bone`,
    description: `Pop’z BBQ & Catering was developed with one thing in mind; to provide people with delicious, cooked to order South Georgia style BBQ. Developing a reputation for some of the best South Georgia style BBQ. Our menu has expanded over the years and includes a large variety of options that are truly delicious.`,
    author: `@0xhjohnson`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Menu',
        link: '/menu'
      },
      {
        name: 'Gallery',
        link: '/gallery'
      },
      {
        name: 'Book an Event',
        link: '/book-event'
      }
    ],
    menuCategories: [
      { name: 'Starters' },
      { name: 'Meats and Seafood' },
      { name: 'Sides' }
    ],
    menuItems: [
      {
        Starters: [
          {
            title: 'Delicious Starters',
            items: ['Smoked Mini-Sweet Peppers', 'BBQ Shrimp']
          }
        ]
      },
      {
        'Meats and Seafood': [
          {
            title: 'Pork',
            items: ['Slow Cooked Pulled Pork', 'Whole Hog', 'South Georgia Style Ribs']
          },
          {
            title: 'Chicken',
            items: ['BBQ Smoked Chicken']
          },
          {
            title: 'Beef',
            items: ['Slow Cooked Beef Brisket', 'Whole Tenderloin', 'Standing Rib Roast', 'Cowboy Cut Rib Eye with Bone In', 'New York Strip']
          },
          {
            title: 'Lamb',
            items: ['Rack of Lamb'],
          },
          {
            title: 'Seafood',
            items: ['Smoked Salmon', 'Fresh Local Caught Fish', 'BBQ Shrimp']
          }
        ]
      },
      {
        Sides: [
          {
            title: 'Sides',
            items: ['Potato Salad', 'Homemade Macaroni & Cheese', 'Southern Style Green Beans', 'Green Bean Almadine', 'Pasta Salad', 'Baked Beans', 'Corn on the Cob', 'Coleslaw', 'Yellow Rice', 'Garden Salad', 'Red Skin Potatoes']
          }
        ]
      }
    ]
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
        icon: `src/images/popz-bbq-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`
  ]
};
