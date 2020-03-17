import React from 'react'
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
    font-size: 24px;
    background-color: orange;
    padding: 15px;
  `

const Home = () => {

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
          <Image src="https://us.123rf.com/450wm/chuckchee/chuckchee1709/chuckchee170900054/85696044-stock-vector-pixel-art-bearded-hero-character-with-red-cape-and-sword-ready-to-fight.jpg?ver=6" />    
        </ImageBox>
        <Paragraph>VS</Paragraph>
        <ImageBox>
        <Image src="https://image.shutterstock.com/image-vector/pixel-art-character-8bit-bearded-260nw-1170546082.jpg"/>
        </ImageBox>
      </VsSection>
      
      <a href="/best-tests"><Button>FIGHT</Button></a>
      
    </Wrapper>
  )
}

export default Home