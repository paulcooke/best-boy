import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
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



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
