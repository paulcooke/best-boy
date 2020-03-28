import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import ScoresContext from '../../contexts/ScoresContext'
import { Wrapper, Title, Paragraph, ImageBox, Image, Button, VsSection } from '../../styles/commonStyles'

const Home = () => {
  
  const [battleOneStatus, setBattleOneStatus] = useState('BATTLE ONE >>> FIGHT!')
  // const currentScores = useContext(ScoresContext)
  // const scores = currentScores
  // console.log('current scores in state on render', currentScores.scores)
  console.log(ScoresContext)
  // const setScore = currentScores.setScore

  // useEffect(() => {
  //   console.log('use effect check', currentScores.scores)
  // }, [])

  return (
    <ScoresContext.Consumer>
      {value => (
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
            <Paragraph>Paul: {(JSON.parse(localStorage.getItem('currentScores')) && JSON.parse(localStorage.getItem('currentScores')).paul) || value.scores.paul}</Paragraph>
            <Paragraph>Mark: {(JSON.parse(localStorage.getItem('currentScores')) && JSON.parse(localStorage.getItem('currentScores')).mark) || value.scores.mark}</Paragraph>
          </VsSection>

          <br/>
          <a href="/battle-one"><Button>{battleOneStatus}</Button></a>
          <br/>
          <button onClick={value.resetScores}>reset scores</button>

        </Wrapper>
      )}
    </ScoresContext.Consumer>
    
    
  )
}

export default Home