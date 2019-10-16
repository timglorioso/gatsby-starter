import React from "react"
import { createGlobalStyle } from "styled-components"

import SEO from "./SEO"

const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
    }
`

const PageLayout = ({ children }) => (
    <React.Fragment>
        <SEO />
        <GlobalStyle />
        {children}
    </React.Fragment>
)

export default PageLayout
