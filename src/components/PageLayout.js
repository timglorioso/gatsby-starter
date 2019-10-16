import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
    }
`

const PageLayout = ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        {children}
    </React.Fragment>
)

export default PageLayout
