import React, { useState } from 'react'
import styled from 'styled-components'

import { Wrapper, Title, Paragraph, ImageBox, Image, Button } from '../../styles/commonStyles'

const VsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
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