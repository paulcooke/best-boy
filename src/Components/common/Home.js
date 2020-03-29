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

  const [sound, setSound] = useState(true)
  
  const playSound = () => {
    const toggle = !sound
    setSound(toggle)
  }

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
              <Image src="https://bit.ly/3byWKEU" />    
            </ImageBox>
            <Paragraph>VS</Paragraph>
            <ImageBox>
              <Image src="https://bit.ly/2vV5QN6" />
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
          <br />
          
        
        </Wrapper>
      )}
    </ScoresContext.Consumer>
    
    
  )
}

export default Home

// audio messing
// <Button>
//             <audio onClick={ playSound ? () => this.pause() : () => this.play() } volume="0.1" id="theme" loop="true" src="https://zophar.vgmdownloads.com/soundfiles/nintendo-snes-spc/street-fighter-ii/02%20The%20World%20Warrior.mp3" type="audio/mp3"></audio>
//             <i class="fas fa-music"></i>
//           </Button>