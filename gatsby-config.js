module.exports = {
  siteMetadata: {
    title: 'Kloder Games',
    description: 'Old Games Die Hard',
    author: '@kloder',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'games',
        path: `${__dirname}/data/games/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kloder Games',
        short_name: 'Kloder Games',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['en', 'es'],
        defaultLanguage: 'en',
        redirect: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};

