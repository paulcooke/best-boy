import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    background-color: white; 
    min-height: 100vh;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    padding-top: 20px;
    max-width: 600px;
  `

const Title = styled.h1`
  color: #282c34;
  text-align: center;
  padding: 0 2px;
`

const Paragraph = styled.p`
  color: #282c34;
  text-align: center;
  padding: 0 2px;
`

const VsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
`

const ImageBox = styled.div`
  max-height: 200px;
  max-width: 200px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  font-size: 14px;
  background-color: orange;
  padding: 15px;
`



const Home = () => {
  
  const [paulScore, setPaulScore] = localStorage.getItem('paulScore') ? useState(localStorage.getItem('paulScore')) : useState(0)
  const [markScore, setMarkScore] = localStorage.getItem('markScore') ? useState(localStorage.getItem('markScore')) : useState(0)
  const [battleOneStatus, setBattleOneStatus] = useState('BATTLE ONE >>> FIGHT!')

  const scorePlusOne = ({ target: { value, name } }) => {
    if (name === 'paulScore') setPaulScore(parseInt(value) + 1)
    if (name === 'markScore') setMarkScore(parseInt(value) + 1)
    localStorage.setItem(name, parseInt(value) + 1)
  }

  const resetScores = () => {
    setPaulScore(0)
    setMarkScore(0)
    setBattleOneStatus('BATTLE ONE >>> FIGHT!')
    localStorage.removeItem('paulScore')
    localStorage.removeItem('markScore')
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
      <br/>
      <button onClick={resetScores}>reset scores</button>

    </Wrapper>
  )
}

export default Home