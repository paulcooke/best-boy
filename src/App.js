import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Press Start 2P', cursive;
  }
` 

const Wrapper = styled.section`
  background-color: white;  
  min-height: 100vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

const Title = styled.h1`
  color: #282c34;
`

const Paragraph = styled.p`
  color: #282c34;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        
        <Title>
          BEST BOY BATTLE
        </Title>
        <Paragraph>
          Who is the best boy? Let's find out...
        </Paragraph>

      </Wrapper>
    </>
  );
}



export default App
