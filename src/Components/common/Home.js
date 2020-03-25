import React, { useState, useContext } from 'react'
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
  
  const [battleOneStatus, setBattleOneStatus] = useState('BATTLE ONE >>> FIGHT!')

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
        <Paragraph>Paul: </Paragraph>
        <Paragraph>Mark: </Paragraph>
      </VsSection>

      <br/>
      <a href="/battle-one"><Button>{battleOneStatus}</Button></a>
      <br/>
      <button>reset scores</button>

    </Wrapper>
  )
}

export default Home