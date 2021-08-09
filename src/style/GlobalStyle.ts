import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(24, 127, 156);
    color: white;
    font-family: 'Poppins', sans-serif;
    padding: 30px 0;
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
`

export default GlobalStyle;
