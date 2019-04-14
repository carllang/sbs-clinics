module.exports = {
  siteMetadata: {
    title: `SBS`,
    description: `Description`,
    author: `Carl Lang`,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Sectors',
        link: '/sectors',
      },
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'News',
        link: '/news',
      },
      {
        name: 'Case studies',
        link: '/case-studies',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
      {
        name: 'Quote',
        link: '/request-a-quote',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-root-import',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon32.png',
      },
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: 'gatsby-plugin-page-transitions',
    //   options: {
    //     transitionTime: 1000,
    //   },
    // },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // Add any options here
      },
    },
  ],
};
