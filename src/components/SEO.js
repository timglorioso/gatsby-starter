import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )
    const htmlLang = lang || "en"
    const titleTemplate = title
        ? `%s | ${site.siteMetadata.title}`
        : site.siteMetadata.title
    const metaTitle = title || site.siteMetadata.title
    const metaDescription = description || site.siteMetadata.description
    const otherMetaTags = meta || []
    return (
        <Helmet
            htmlAttributes={{
                lang: htmlLang
            }}
            title={metaTitle}
            titleTemplate={titleTemplate}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                }
            ].concat(otherMetaTags)}
        />
    )
}

export default SEO
