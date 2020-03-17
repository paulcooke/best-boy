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


function App() {
  return (
    <Wrapper>
      <Title>
          hello there people
      </Title>
    </Wrapper>
  );
}

export default App;