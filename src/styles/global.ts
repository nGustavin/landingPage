import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: none;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        min-height: 100%;
    }

    h1, h2, h3, h4, p, span, strong, a{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export default GlobalStyle