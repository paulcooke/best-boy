import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import ScoresContext from '../../contexts/ScoresContext'
import { Wrapper, Title, Paragraph, ImageBox, Image, Button } from '../../styles/commonStyles'

const VsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
`

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
            <Paragraph>Paul: {value.scores.paul}</Paragraph>
            <Paragraph>Mark: {value.scores.mark}</Paragraph>
          </VsSection>

          <VsSection>
            <Button onClick={() => value.setScores('paul')}>Paul test</Button>
            <Button onClick={() => value.setScores('mark')}>Mark test</Button>
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