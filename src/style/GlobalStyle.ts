import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(24, 127, 156);
    color: #5c6169;
    font-family: 'Poppins', sans-serif;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export default GlobalStyle;
