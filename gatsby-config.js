require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        //apiToken: process.env.DATO_API_TOKEN,
        apiToken: 'e32e47d94813fde8e5a7b5f265b9b4'
      },
    },
  ],
}
