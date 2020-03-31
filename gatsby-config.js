module.exports = {
  siteMetadata: {
    title: `Pop'z BBQ & Catering - Bad to the Bone`,
    siteUrl: 'https://popzbbq.com',
    description: `Providing cooked to order South Georgia style BBQ that is bad to the bone. Developing a reputation for some of the best South Georgia style BBQ in the Fort Myers area.`,
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
            items: [
              {
                name: 'Smoked Mini-Sweet Peppers',
                info: 'Stuffed with cream cheese and wrapped in bacon'
              },
              {
                name: 'BBQ Shrimp',
                info: `Pop'z BBQ shrimp`
              }
            ]
          }
        ]
      },
      {
        'Meats and Seafood': [
          {
            title: 'Pork',
            items: [
              {
                name: 'Slow Cooked Pulled Pork',
                info: 'Tender pulled pork cooked 10 to 12 hours'
              },
              {
                name: 'Whole Hog',
                info: 'Whole hog with fruit over eyes for presentation'
              },
              {
                name: 'South Georgia Style Ribs',
                info: 'Fall off the bone, south Georgia style ribs'
              }
            ]
          },
          {
            title: 'Chicken',
            items: [
              {
                name: 'BBQ Smoked Chicken',
                info: 'Smoked chicken served whole, halved, or quartered'
              }
            ]
          },
          {
            title: 'Beef',
            items: [
              {
                name: 'Slow Cooked Beef Brisket',
                info:
                  'Beef brisket seasoned with our signature rub and cooked 12 to 14 hours'
              },
              {
                name: 'Whole Tenderloin',
                info: ''
              },
              {
                name: 'Standing Rib Roast',
                info: ''
              },
              {
                name: 'Cowboy Cut Rib Eye with Bone In',
                info: ''
              },
              {
                name: 'New York Strip',
                info: ''
              }
            ]
          },
          {
            title: 'Lamb',
            items: [
              {
                name: 'Rack of Lamb',
                info: ''
              }
            ]
          },
          {
            title: 'Seafood',
            items: [
              {
                name: 'Smoked Salmon',
                info: ''
              },
              {
                name: 'Fresh Local Caught Fish',
                info: ''
              },
              {
                name: 'BBQ Shrimp',
                info: `Pop'z BBQ shrimp`
              }
            ]
          }
        ]
      },
      {
        Sides: [
          {
            title: 'Sides',
            items: [
              {
                name: 'Potato Salad',
                info: ''
              },
              {
                name: 'Homemade Macaroni & Cheese',
                info: 'Classic, creamy mac & cheese with or without bacon'
              },
              {
                name: 'Southern Style Green Beans',
                info: ''
              },
              {
                name: 'Green Bean Almadine',
                info: ''
              },
              {
                name: 'Pasta Salad',
                info: ''
              },
              {
                name: 'Baked Beans',
                info: `Pop'z BBQ baked beans`
              },
              {
                name: 'Corn on the Cob',
                info: 'Fresh corn on the cob seasoned to perfection'
              },
              {
                name: 'Coleslaw',
                info: ''
              },
              {
                name: 'Yellow Rice',
                info: ''
              },
              {
                name: 'Garden Salad',
                info: ''
              },
              {
                name: 'Red Skin Potatoes',
                info: 'Fresh red skin potatoes'
              }
            ]
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-113460437-3`
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pop'z BBQ & Catering`,
        short_name: `Pop'z BBQ`,
        start_url: `/`,
        background_color: `#fbd38d`,
        theme_color: `#9c4221`,
        display: `minimal-ui`,
        icon: `src/images/popz-bbq-icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer'),
          require('cssnano')
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
