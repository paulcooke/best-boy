import React from 'react'
import styled from 'styled-components'



const Home = () => {

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

  return (
    <Wrapper>
      <Title>
        BEST BOY BATTLE
      </Title>
      <Paragraph>
        Who is the best boy? Let's find out...
      </Paragraph>
    </Wrapper>
  )
}

export default Home