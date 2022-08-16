module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: '한글도 되냐?',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
