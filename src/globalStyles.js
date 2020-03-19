import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    font-family: 'Press Start 2P', cursive;
  }
`
export default GlobalStyle