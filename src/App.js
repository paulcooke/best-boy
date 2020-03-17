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
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
` 

const Wrapper = styled.section`
  background-color: #282c34;  
  min-height: 100vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: red;
`

const Paragraph = styled.p`
  color: red;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        
        <Title>
          BEST BOY MACHINE
        </Title>
        <Paragraph>
          Who ate my muffin?
        </Paragraph>

      </Wrapper>
    </>
  );
}



export default App
