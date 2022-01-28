import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  html, body, #root {
    min-height: 100vh;
    height: 100%;
    background-color: #D3E4CD;
  }
  body {
    color: #0F0E0E;
    font-family: 'Noto Sans', sans-serif;
  }
  input, button, textarea {
    font-family: 'Noto Sans', sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
