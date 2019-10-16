module.exports = {
    siteMetadata: {
        title: `My New Website`,
        description: `It's really great, I'm tellin' ya.`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: `${__dirname}/src/components/PageLayout.js`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ]
}
