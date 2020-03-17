import React from 'react';
import styled from 'styled-components'

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
    <Wrapper>
      
      <Title>
        BEST BOY MACHINE
      </Title>
      <Paragraph>
        Who ate my muffin?
      </Paragraph>

    </Wrapper>
  );
}

export default App;
