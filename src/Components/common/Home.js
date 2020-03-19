import React, { useState } from 'react'
import styled from 'styled-components'

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

const VsSection = styled.section`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`

const ImageBox = styled.div`
  height: 200px;
  width: 200px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  font-size: 20px;
  background-color: orange;
  padding: 15px;
`



const Home = () => {
  
  const [paulScore, setPaulScore] = localStorage.getItem('paulScore') ? useState(localStorage.getItem('paulScore')) : useState(0)
  const [markScore, setMarkScore] = localStorage.getItem('markScore') ? useState(localStorage.getItem('markScore')) : useState(0)
  const [battleOneStatus, setBattleOneStatus] = useState('BATTLE ONE >>> FIGHT!')

  const scorePlusOne = ({ target: { value, name } }) => {
    if (name === 'paulScore') {
      setPaulScore(parseInt(value) + 1)
    } else {
      setMarkScore(parseInt(value) + 1)
    }
    localStorage.setItem(name, parseInt(value) + 1)
  }

  return (
    <Wrapper>
      
      <Title>
        BEST BOY BATTLE
      </Title>
      <Paragraph>
        Who is the best boy? Let's find out...
      </Paragraph>
      
      <VsSection>
        <ImageBox>
          <Image src="assets/paul.svg" />    
        </ImageBox>
        <Paragraph>VS</Paragraph>
        <ImageBox>
          <Image src="assets/mark.svg" />
        </ImageBox>
      </VsSection>
      
      <VsSection>
        <Paragraph>Score: {paulScore}</Paragraph>
        <Paragraph>Score: {markScore}</Paragraph>
      </VsSection>

      <VsSection>
        <button onClick={scorePlusOne} value={paulScore} name="paulScore">test paul score</button>
        <button onClick={scorePlusOne} value={markScore} name="markScore">test mark score</button>
      </VsSection>

      <br/>
      <a href="/battle-one"><Button>{battleOneStatus}</Button></a>
      
    </Wrapper>
  )
}

export default Home